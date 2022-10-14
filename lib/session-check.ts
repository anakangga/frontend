import Router from "next/router";
import Cookie from "js-cookie";

const sessionCheck = async (path = "", pathNotLogin = "") => {
  if (typeof window !== "undefined") {
    const token = Cookie.get("key");
    if (!token) {
      if (path !== "") localStorage.setItem("redirect_path", path);
      if (pathNotLogin !== "") return Router.push(pathNotLogin);
      return Router.push("/login");
    }
    if (path !== "") return Router.push(path);
  }
};

export default sessionCheck;
