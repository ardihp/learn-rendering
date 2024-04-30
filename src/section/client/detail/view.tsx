"use client";

import axios from "@/helpers/axios";
import Loader from "@/section/loading";
import { PokemonDetail } from "@/type/pokemon";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ClientDetailPokemonViewProps {
  pokemon: string | string[];
}

export default function ClientDetailPokemonView({
  pokemon,
}: ClientDetailPokemonViewProps) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [details, setDetail] = useState<PokemonDetail>();

  useEffect(() => {
    axios.get(`/pokemon/${pokemon}`).then((res) => {
      setDetail(res?.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <title>{details?.name || "Pokemon"} | Poke Render</title>

      <div className="flex flex-col w-full">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 w-fit">
                {details?.types?.map((item, key) => (
                  <div key={key} className="chip-type">
                    <Image
                      src={`/assets/types/${item.type.name}.png`}
                      width={24}
                      height={24}
                      alt="Pokemon type"
                    />
                    <p>{item.type.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-end gap-1">
                <p className="text-6xl font-semibold capitalize">
                  {details?.name}
                </p>
                <p className="text-2xl text-white/35">{`#${details?.order}`}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
