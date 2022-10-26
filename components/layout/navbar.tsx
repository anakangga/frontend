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
      <div className="px-12 py-5  xl:flex hidden items-center fixed w-full bg-white z-30 shadow ">
        <Link href="/">
          <a className="flex gap-2 items-center text-xl font-bold">
            <Logo /> Gesturin
          </a>
        </Link>
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
      <div className="px-6 py-5 flex xl:hidden items-center fixed w-full bg-white z-30 shadow">
        <div className="flex xl:hidden justify-center w-full items-center h-9 transition-all duration-500 ease-in-out">
          <Link href="/">
            <a className="flex gap-2 items-center text-xl font-bold">
              <Logo /> Gesturin
            </a>
          </Link>
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

const Logo = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 75 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="52.4027"
      height="52.4027"
      transform="matrix(0.715612 -0.698498 0.715612 0.698498 0 44)"
      fill="#319795"
    />
    <path
      d="M37.4656 58.4C34.9323 58.4 32.7456 57.9867 30.9056 57.16C29.0923 56.3067 27.679 55.08 26.6656 53.48C25.679 51.8533 25.1323 49.88 25.0256 47.56C24.999 46.4133 24.9856 45.2 24.9856 43.92C24.9856 42.6133 24.999 41.3733 25.0256 40.2C25.1323 37.9333 25.6923 36.0133 26.7056 34.44C27.719 32.8667 29.1456 31.6667 30.9856 30.84C32.8256 30.0133 34.9856 29.6 37.4656 29.6C39.4656 29.6 41.239 29.8533 42.7856 30.36C44.3323 30.84 45.6256 31.4933 46.6656 32.32C47.7323 33.1467 48.5323 34.0533 49.0656 35.04C49.6256 36.0267 49.919 37 49.9456 37.96C49.9723 38.2 49.8923 38.4 49.7056 38.56C49.5456 38.72 49.3456 38.8 49.1056 38.8H43.2656C42.9723 38.8 42.7456 38.76 42.5856 38.68C42.4523 38.5733 42.3323 38.4267 42.2256 38.24C42.039 37.84 41.759 37.4267 41.3856 37C41.039 36.5467 40.5456 36.16 39.9056 35.84C39.2923 35.52 38.479 35.36 37.4656 35.36C35.9456 35.36 34.7456 35.76 33.8656 36.56C33.0123 37.36 32.5456 38.64 32.4656 40.4C32.3856 42.6933 32.3856 45.0133 32.4656 47.36C32.5456 49.2267 33.039 50.5733 33.9456 51.4C34.8523 52.2267 36.0523 52.64 37.5456 52.64C38.559 52.64 39.4523 52.4667 40.2256 52.12C41.0256 51.7733 41.6523 51.24 42.1056 50.52C42.559 49.7733 42.7856 48.8267 42.7856 47.68V46.92H39.0256C38.7323 46.92 38.479 46.8267 38.2656 46.64C38.079 46.4267 37.9856 46.1733 37.9856 45.88V42.92C37.9856 42.6267 38.079 42.3867 38.2656 42.2C38.479 41.9867 38.7323 41.88 39.0256 41.88H49.1056C49.399 41.88 49.639 41.9867 49.8256 42.2C50.0123 42.3867 50.1056 42.6267 50.1056 42.92V47.48C50.1056 49.7733 49.5856 51.7333 48.5456 53.36C47.5056 54.9867 46.0256 56.24 44.1056 57.12C42.2123 57.9733 39.999 58.4 37.4656 58.4Z"
      fill="#FAFAF9"
    />
  </svg>
);

export default Navbar;
