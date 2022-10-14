import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AxiosError } from "axios";
import axios from "../../../lib/axios";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        key: { label: "Key", type: "password" },
        display_name: { label: "Display Name", type: "text" },
      },
      async authorize(credentials, req) {
        const data = await axios
          .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/login/`, {
            email: credentials?.email,
            password: credentials?.password,
          })
          .then((res) => {
            return res.data;
          })
          .catch((err: AxiosError) => {
            return err.response?.data;
          });

        if (!data?.key) throw new Error(JSON.stringify(data));

        const { data: userDetail } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/me`,
          {
            headers: {
              Authorization: `Token ${data.key}`,
            },
          }
        );

        return {
          ...userDetail,
          key: data.key,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
