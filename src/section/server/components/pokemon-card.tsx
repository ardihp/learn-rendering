"use client";

import { IMAGE_SPRITES } from "@/helpers/config";
import { PokemonList } from "@/type/pokemon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { InView } from "react-intersection-observer";

interface PokemonCardProps {
  pokemon: PokemonList;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const pathname = usePathname();

  return (
    <InView>
      {({ ref, inView }) => (
        <Link href={pathname + "/" + pokemon.name} ref={ref}>
          <div className="flex">
            <div className="card-pokemon">
              {inView ? (
                <Image
                  src={IMAGE_SPRITES(Number(pokemon.url?.split("/")?.[6]))}
                  alt={pokemon.name}
                  width={160}
                  height={160}
                />
              ) : (
                <div className="w-[160px] h-[160px]"></div>
              )}

              <p>{pokemon.name}</p>
            </div>
          </div>
        </Link>
      )}
    </InView>
  );
}
