import Ripple from "@/components/magicui/ripple";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-0 flex-grow items-center">
      <section className="hidden md:flex relative h-full w-full flex-col items-center justify-center">
        <p className="text-4xl font-bold z-10 text-center leading-8">
          Poke <br /> Render
        </p>
        <Ripple mainCircleSize={260} />
      </section>

      <div className="flex flex-col gap-8 w-full md:hidden">
        <p className="text-2xl font-bold z-10 leading-6">
          Poke <br /> Render
        </p>
        <section className="flex relative h-[220px] w-full flex-col items-center justify-center">
          <Image
            src="/assets/poke-ball.png"
            width={55}
            height={55}
            alt="Pokebal bounching"
          />

          <Ripple mainCircleSize={100} numCircles={4} />
        </section>
      </div>

      <section className="grid w-full max-w-screen-xl lg:grid-cols-4 md:mt-auto gap-4">
        <Link
          href="/client-rendering"
          className="group rounded-lg flex flex-col items-start border border-transparent px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
          passHref
        >
          <h2 className="md:mb-3 text-lg md:text-2xl font-medium">
            Client{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="text-xs md:text-sm font-thin opacity-50">
            Client Side Rendering with Client Side Fetching
          </p>
        </Link>

        <Link
          href="/server-rendering"
          className="group rounded-lg flex flex-col items-start border border-transparent px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
          passHref
        >
          <h2 className="md:mb-3 text-lg md:text-2xl font-medium">
            Server{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="text-xs md:text-sm font-thin opacity-50">
            Server Side Rendering with Server Side Fetching
          </p>
        </Link>
      </section>
    </div>
  );
}
