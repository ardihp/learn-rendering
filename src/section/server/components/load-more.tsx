"use client";

import { getData } from "@/app/server-rendering/actions";
import { PokemonList } from "@/type/pokemon";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PokemonCard from "./pokemon-card";

export default function LoadMore() {
  const [lists, setList] = useState([]);
  const [limit, setLimit] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "500px",
  });

  useEffect(() => {
    if (inView) {
      getData({ limit, offset: 25 }).then((res) => setList(res));
    }
  }, [limit]);

  useEffect(() => {
    if (inView) {
      setLimit((prev) => prev + 25);
    }
  }, [inView]);

  return (
    <>
      {lists?.length >= 1 &&
        lists.map((pokemon: PokemonList, key: number) => (
          <PokemonCard key={key} pokemon={pokemon} />
        ))}
      <div className="w-full h-[2px]" ref={ref} />
    </>
  );
}
