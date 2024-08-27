import { PokemonList } from "@/type/pokemon";
import React from "react";
import PokemonCard from "./components/pokemon-card";
import { getData } from "@/app/server-rendering/actions";
import LoadMore from "./components/load-more";

export default async function ServerView() {
  const lists = await getData({ limit: 25 });

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-5 gap-6">
        {lists.map((pokemon: PokemonList, key: number) => (
          <PokemonCard key={key} pokemon={pokemon} />
        ))}
      </div>
      <LoadMore />
    </div>
  );
}
