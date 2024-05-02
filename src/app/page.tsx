import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow items-center">
      <section className="mt-auto">
        <p className="text-6xl font-bold">Poke Render</p>
      </section>

      <section className="mt-auto grid text-center w-full max-w-screen-xl lg:grid-cols-4 lg:text-left">
        <Link
          href="/client-rendering"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          passHref
        >
          <h2 className="mb-3 text-2xl font-medium">
            CSR{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm font-thin opacity-50">
            Ini rendernya di depan (client / browser user).
          </p>
        </Link>

        <Link
          href="/server-rendering"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          passHref
        >
          <h2 className="mb-3 text-2xl font-medium">
            SSR{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm font-thin opacity-50">
            Ini rendernya di belakang (server).
          </p>
        </Link>
      </section>
    </div>
  );
}
