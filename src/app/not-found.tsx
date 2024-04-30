import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page404() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-6">
      <div className="flex items-center gap-6">
        <p className="text-[244px] font-bold">4</p>
        <Image
          src="/assets/poke-ball.png"
          width={165}
          height={165}
          alt="Pokebal bounching"
          className="animate-bounce mt-14"
        />
        <p className="text-[244px] font-bold">4</p>
      </div>

      <Link href="/">
        <button className="button-404 animate-pulse">
          <div className="flex items-center pb-1.5">
            <IconChevronLeft className="icon-chevron opacity-0 transition-all duration-300 ease-out" />
            <p className="text-xl">Back to home</p>
          </div>
          <div className="under bg-white h-[2px] w-0 transition-all duration-500 ease-out" />
        </button>
      </Link>
    </div>
  );
}
