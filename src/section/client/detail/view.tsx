"use client";

import axios from "@/helpers/axios";
import { ColorType } from "@/helpers/color-type";
import { IMAGE_SPRITES } from "@/helpers/config";
import Loader from "@/section/loading";
import { PokemonDetail } from "@/type/pokemon";
import {
  IconLineHeight,
  IconNorthStar,
  IconRulerMeasure,
  IconWeight,
} from "@tabler/icons-react";
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
  const [type, setType] = useState<string>("normal");

  useEffect(() => {
    axios.get(`/pokemon/${pokemon}`).then((res) => {
      setDetail(res?.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (details) {
      setType(details?.types?.[0]?.type?.name);
    }
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

                    <p
                      className={`font-medium leading-none`}
                      style={{ color: ColorType(type) }}
                    >
                      {pokeStat?.base_stat}
                    </p>
                  </div>

                  <div className="h-2 w-64 rounded-full bg-slate-200/15">
                    <div
                      className={`h-2 rounded-full`}
                      style={{
                        width: `${pokeStat?.base_stat / 3}%`,
                        backgroundColor: ColorType(type),
                      }}
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="flex items-center relative w-full">
            <div className="flex relative w-full h-full items-center justify-center overflow-hidden pr-24">
              <div
                className="absolute w-[375px] h-[375px] rounded-full border-2 border-dashed border-slate-500/15 z-[3]"
                style={{ borderColor: `${ColorType(type)}1a` }}
              >
                <div
                  className="h-full w-full rounded-full p-[2px] animate-spin-fast"
                  style={{
                    background: `conic-gradient(#FFFFFF00 90%, ${ColorType(
                      type
                    )}c9)`,
                  }}
                >
                  <div className="h-full w-full bg-black rounded-full" />
                </div>
              </div>
              <div
                className="absolute w-[535px] h-[535px] rounded-full border-2 border-dashed border-slate-500/15 z-[2]"
                style={{ borderColor: `${ColorType(type)}1a` }}
              >
                <div
                  className="h-full w-full rounded-full p-[1px] animate-spin-medium"
                  style={{
                    background: `conic-gradient(#FFFFFF00 90%, ${ColorType(
                      type
                    )}c9)`,
                  }}
                >
                  <div className="h-full w-full bg-black rounded-full" />
                </div>
              </div>
              <div
                className="absolute w-[685px] h-[685px] rounded-full border-2 border-dashed border-slate-500/15 z-[1]"
                style={{ borderColor: `${ColorType(type)}1a` }}
              >
                <div
                  className="h-full w-full rounded-full p-[1px] animate-spin-slow"
                  style={{
                    background: `conic-gradient(#FFFFFF00 90%, ${ColorType(
                      type
                    )}c9)`,
                  }}
                >
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

            <div className="flex flex-col absolute right-0 z-[1]">
              <ul className="flex flex-col gap-2 border border-white/15 rounded-lg p-2">
                <li className="detail-pokemon-list">
                  <IconNorthStar className="rotate-90" />
                  <p className="text-xs">{details?.base_experience || 0} xp</p>
                </li>
                <li className="detail-pokemon-list">
                  <IconRulerMeasure className="rotate-90" />
                  <p className="text-xs">{(details?.height || 0) / 10} m</p>
                </li>
                <li className="detail-pokemon-list">
                  <IconWeight />
                  <p className="text-xs">{(details?.weight || 0) / 10} kg</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
