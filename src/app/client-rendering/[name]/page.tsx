"use client";

import React from "react";
import ClientDetailPokemonView from "@/section/client/detail/view";

interface ClientDetailPokemonProps {
  params: {
    name: string;
  };
}

export default function ClientDetailPokemon({
  params,
}: ClientDetailPokemonProps) {
  return <ClientDetailPokemonView pokemon={params?.name || ""} />;
}
