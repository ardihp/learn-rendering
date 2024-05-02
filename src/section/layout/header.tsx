"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-12 w-full max-w-screen-xl mx-auto p-4 bg-slate-300/5 border border-white/15 backdrop-blur-lg rounded-3xl">
      <div className="flex z-10 items-center justify-between text-sm">
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
              Client Side Rendering
            </p>
          </Link>
          <Link href="/server-rendering">
            <p
              className={`header-item ${
                pathname?.includes("/server-rendering") &&
                "!bg-gradient-to-tr from-indigo-100 to-pink-600 !border-x-pink-300 !border-y-indigo-200"
              }`}
            >
              Server Side Rendering
            </p>
          </Link>
        </div>

        <div className="relative mr-4">
          <div className="fixed bottom-0 left-0 flex h-48 items-end justify-center lg:static lg:size-auto bg-transparent">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
            <div className="absolute bg-gradient-to-br from-pink-500 to-indigo-600 p-4 blur-2xl w-20 h-12 -z-10 -top-8 -right-4"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
