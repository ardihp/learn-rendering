"use client";

import axios from "@/helpers/axios";
import React, { useEffect, useState } from "react";
import { PokemonList } from "@/type/pokemon";
import dynamic from "next/dynamic";
import SkeletonCard from "./components/skeleton-card";

const PokemonCard = dynamic(() => import("./components/pokemon-card"), {
  loading: () => <SkeletonCard />,
});

export default function ClientView() {
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/pokemon?limit=25").then((res) => {
      setList(res?.data?.results);
      setTimeout(() => setLoading(false), 500);
    });
  }, []);

  return (
    <>
      <title>Client Side Rendering | Poke Render</title>

      <div className="flex flex-col gap-4 w-full">
        <div className="grid grid-cols-5 gap-6">
          {loading
            ? [...new Array(15)]?.map((item, key) => <SkeletonCard key={key} />)
            : lists.map((pokemon: PokemonList, key: number) => (
                <PokemonCard key={key} pokemon={pokemon} />
              ))}
        </div>
      </div>
    </>
  );
}
