import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./hamburger.module.css";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const { status } = useSession();

  const toggleHamburger = () => {
    setOpen(!open);
  };

  const NavRoute = [];

  if (status === "authenticated") {
    NavRoute.push({ id: 8, href: "/account", name: "Account" });
  } else {
    NavRoute.push({ id: 9, href: "/login", name: "Login" });
    NavRoute.push({ id: 10, href: "/register", name: "Register" });
  }

  const router = useRouter();

  return (
    <>
      <div className="px-12 py-5  xl:flex hidden items-center fixed w-full bg-white z-30">
        <Link href="/">Homepage</Link>
        <div className="flex gap-10 w-full justify-end items-center">
          {NavRoute.map((nav) => {
            return (
              <Link key={nav.id} href={nav.href}>
                <div onClick={() => setActive(nav.name)}>
                  <button
                    className={
                      router.asPath === nav.href
                        ? "font-semibold text-[16px] text-[#5038BC]"
                        : "text-[16px] text-[#828282]"
                    }
                  >
                    {nav.name}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-6 py-5 flex xl:hidden items-center fixed w-full bg-white z-30">
        <div className="flex xl:hidden justify-center w-full items-center h-9 transition-all duration-500 ease-in-out">
          <Link href="/">Homepage</Link>
          <div className="flex w-full justify-end">
            <button
              title="Toggle Hamburger"
              onClick={toggleHamburger}
              className={open ? styles.whnth : styles.wh}
            >
              <div className={styles.icon}></div>
            </button>
          </div>
          <div
            className={
              open
                ? `navLink absolute transition-all duration-500 ease-in-out top-[3.5rem] bg-white opacity-100 left-0 w-screen h-screen px-6 py-[1.8rem]`
                : ` navLink absolute transition-all duration-500 ease-in-out top-[3.5rem] bg-white opacity-0 left-[100vw] w-screen h-screen px-6 py-[1.8rem]`
            }
          >
            <div
              className={
                active
                  ? `linkWrapper lg:text-base text-sm text-[#5038BC] hover:text-primaryPurple-active flex flex-col gap-6`
                  : `text-[#828282] flex flex-col gap-6`
              }
            >
              {NavRoute.map((nav) => {
                return (
                  <Link key={nav.id} href={nav.href}>
                    <div
                      onClick={() => {
                        setActive(nav.name);
                        toggleHamburger();
                      }}
                    >
                      <button
                        className={
                          router.asPath === nav.href
                            ? "font-semibold text-[16px] text-[#5038BC]"
                            : "text-[16px] text-[#828282]"
                        }
                      >
                        {nav.name}
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
