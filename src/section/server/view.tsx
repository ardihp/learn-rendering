import { PokemonList } from "@/type/pokemon";
import React from "react";
import PokemonCard from "./components/pokemon-card";
import { getData } from "@/app/server-rendering/actions";
import LoadMore from "./components/load-more";

export default async function ServerView() {
  const lists = await getData({ limit: 25 });

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
        {lists.map((pokemon: PokemonList, key: number) => (
          <PokemonCard key={key} pokemon={pokemon} />
        ))}
        <LoadMore />
      </div>
    </div>
  );
}
