"use client";

import axios from "@/helpers/axios";
import { ColorType } from "@/helpers/color-type";
import { IMAGE_SPRITES } from "@/helpers/config";
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
  const [color, setColor] = useState<string>();

  useEffect(() => {
    axios.get(`/pokemon/${pokemon}`).then((res) => {
      setDetail(res?.data);

      setTimeout(() => setLoading(false), 500);
    });
  }, []);

  useEffect(() => {
    setColor(ColorType(details?.types?.[0]?.type?.name || ""));
  }, [details]);

  return isLoading ? (
    <div className="flex flex-col w-full">
      <Loader />
    </div>
  ) : (
    <>
      <title>{`${details?.name} | Poke Render`}</title>

      <div className="flex flex-col w-full">
        <div className="flex h-full">
          <div className="flex flex-col min-w-[475px]">
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

            <div className="flex items-end gap-1 mt-4">
              <p className="text-6xl font-semibold capitalize">
                {details?.name}
              </p>
              <p className="text-2xl text-white/35">{`#${details?.order}`}</p>
            </div>

            <section className="flex flex-col gap-6 mt-8">
              {details?.stats?.map((pokeStat, key) => (
                <div key={key} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <p className="capitalize">{pokeStat?.stat?.name}</p>

                    <p className={`font-medium text-[${color}]`}>
                      {pokeStat?.base_stat}
                    </p>
                  </div>

                  <progress
                    className={`progress w-64`}
                    value={pokeStat?.base_stat || 0}
                    max="100"
                  />
                </div>
              ))}
            </section>
          </div>

          <div className="flex relative w-full items-center justify-center overflow-hidden">
            <div className="absolute w-[375px] h-[375px] rounded-full border-2 border-dashed border-white/10 z-[3]">
              <div className="h-full w-full rounded-full bg-gradient-to-t from-white/35 from-[5%] via-black via-20% to-black p-[1px] animate-spin-slow">
                <div className="h-full w-full bg-black rounded-full" />
              </div>
            </div>
            <div className="absolute w-[575px] h-[575px] rounded-full border-2 border-dashed border-white/10 z-[2]">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-white from-[5%] via-black via-20% to-black p-[1px] animate-spin-slow">
                <div className="h-full w-full bg-black rounded-full" />
              </div>
            </div>
            <div className="absolute w-[775px] h-[775px] rounded-full border-2 border-dashed border-white/10 z-[1]">
              <div className="h-full w-full rounded-full bg-gradient-to-l from-white/35 from-[5%] via-black via-20% to-black p-[1px] animate-spin-slow">
                <div className="h-full w-full bg-black rounded-full" />
              </div>
            </div>
            <div className="flex h-full w-full z-[3] items-center justify-center">
              <Image
                src={IMAGE_SPRITES(Number(details?.id))}
                width={325}
                height={325}
                alt={`Pokemon ${details?.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
