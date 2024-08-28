"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="hidden md:block sticky top-6 xl:top-12 w-full max-w-screen-xl mx-auto p-4 bg-slate-300/5 border border-white/15 backdrop-blur-lg rounded-3xl z-10">
        <div className="flex items-center justify-between text-sm">
          <div className="flex gap-5">
            <Link href="/">
              <p
                className={`header-item ${
                  pathname === "/" &&
                  "!bg-gradient-to-tr from-pink-600 to-indigo-600 !border-x-pink-300 !border-y-indigo-200"
                }`}
              >
                Home
              </p>
            </Link>
            <Link href="/client-rendering">
              <p
                className={`header-item ${
                  pathname?.includes("/client-rendering") &&
                  "!bg-gradient-to-tr from-pink-100 to-indigo-600 !border-x-pink-300 !border-y-indigo-200"
                }`}
              >
                Client
              </p>
            </Link>
            <Link href="/server-rendering">
              <p
                className={`header-item ${
                  pathname?.includes("/server-rendering") &&
                  "!bg-gradient-to-tr from-indigo-100 to-pink-600 !border-x-pink-300 !border-y-indigo-200"
                }`}
              >
                Server
              </p>
            </Link>
          </div>

          <div className="mr-4">
            <div className="flex items-end justify-center lg:static lg:size-auto">
              <a
                className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 text-xs"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed at{" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={80}
                  height={24}
                  priority
                />
              </a>
              <div className="absolute bg-gradient-to-br from-pink-500 to-indigo-600 p-4 blur-2xl w-20 h-12 -z-10 -top-8 -right-4"></div>
            </div>
          </div>
        </div>
      </header>

      <header className="flex items-center md:hidden fixed bottom-0 w-full px-4 h-24 border-t border-white/15 backdrop:blur-xl backdrop-blur-xl z-10 [mask-image:linear-gradient(to_bottom,transparent,#ffffffee,white,white)]">
        <section className="flex justify-around items-center rounded-full w-full relative top-3">
          <Link href="/" className="p-4" passHref>
            <p
              className={`text-sm underline decoration-transparent ${
                pathname === "/"
                  ? "underline-offset-[8px] decoration-white"
                  : "decoration-transparent underline-offset-[6px]"
              } duration-200`}
            >
              Home
            </p>
          </Link>
          <Link href="/client-rendering" className="p-4" passHref>
            <p
              className={`text-sm underline decoration-transparent ${
                pathname?.includes("/client-rendering")
                  ? "underline-offset-[8px] decoration-white"
                  : "decoration-transparent underline-offset-[6px]"
              } duration-200`}
            >
              Client
            </p>
          </Link>
          <Link href="/server-rendering" className="p-4" passHref>
            <p
              className={`text-sm underline decoration-transparent ${
                pathname?.includes("/server-rendering")
                  ? "underline-offset-[8px] decoration-white"
                  : "decoration-transparent underline-offset-[6px]"
              } duration-200`}
            >
              Server
            </p>
          </Link>
        </section>
      </header>
    </>
  );
}
