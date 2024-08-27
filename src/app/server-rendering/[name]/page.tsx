import React from "react";
import { getDetail } from "../actions";
import ServerDetailPokemonView from "@/section/server/detail/view";

interface ServerDetailPokemonProps {
  params: {
    name: string;
  };
}

export default async function ServerDetailPokemon({
  params,
}: ServerDetailPokemonProps) {
  const details = await getDetail(params?.name);

  return <ServerDetailPokemonView details={details} />;
}
