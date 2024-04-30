import React from "react";
import ClientDetailPokemonView from "@/section/client/detail/view";

interface ClientDetailPokemonProps {
  params: {
    slug: string;
  };
}

export default function ClientDetailPokemon({
  params,
}: ClientDetailPokemonProps) {
  return <ClientDetailPokemonView pokemon={params?.slug || ""} />;
}
