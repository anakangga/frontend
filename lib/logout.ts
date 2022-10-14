import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

const logout = () => {
  Cookies.remove("key");
  signOut({ callbackUrl: "/" });
};

export default logout;
