import { IMAGE_SPRITES } from "@/helpers/config";
import { PokemonList } from "@/type/pokemon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useInView } from "react-intersection-observer";

interface PokemonCardProps {
  pokemon: PokemonList;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const pathname = usePathname();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Link href={pathname + "/" + pokemon.name} ref={ref}>
      <div className="card-pokemon">
        <div className="relative z-[1] h-[80px] md:h-[140px] w-[80px] md:w-[140px]">
          {inView && (
            <Image
              src={IMAGE_SPRITES(Number(pokemon.url?.split("/")?.[6]))}
              alt={pokemon.name}
              fill
              sizes="200px"
            />
          )}
        </div>

        <p>{pokemon.name}</p>
      </div>
    </Link>
  );
}
