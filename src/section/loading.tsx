import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <>
      <title>loading Data... | Poke Render</title>

      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <Image
          src="/assets/poke-ball.png"
          width={55}
          height={55}
          alt="Pokebal bounching"
          className="animate-bounce"
        />
        <p className="animate-pulse">Loading data...</p>
      </div>
    </>
  );
}
