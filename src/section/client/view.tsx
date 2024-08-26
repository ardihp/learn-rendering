"use client";

import axios from "@/helpers/axios";
import React, { useEffect, useState } from "react";
import { PokemonList } from "@/type/pokemon";
import dynamic from "next/dynamic";
import SkeletonCard from "./components/skeleton-card";
import { useInView } from "react-intersection-observer";

const PokemonCard = dynamic(() => import("./components/pokemon-card"), {
  loading: () => <SkeletonCard />,
});

export default function ClientView() {
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(25);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    axios.get(`/pokemon?limit=${limit}`).then((res) => {
      setList(res?.data?.results);
      setTimeout(() => setLoading(false), 300);
    });
  }, [limit]);

  useEffect(() => {
    if (inView) {
      setLimit(limit + 25);
    }
  }, [inView]);

  return (
    <>
      <title>Client Side Rendering | Poke Render</title>

      <div className="flex flex-col gap-4 w-full">
        <div className="grid grid-cols-5 gap-6">
          {loading
            ? [...new Array(15)]?.map((item, key) => <SkeletonCard key={key} />)
            : lists.map((pokemon: PokemonList, key: number) => (
                <div ref={key % 15 === 0 ? ref : null} key={key}>
                  <PokemonCard pokemon={pokemon} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
