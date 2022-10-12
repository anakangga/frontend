import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

if (typeof window !== "undefined") {
  const token = Cookie.get("token");

  instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  if (token)
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      Cookie.remove("token");
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
    }
    return Promise.reject(error);
  }
);

export default instance;
