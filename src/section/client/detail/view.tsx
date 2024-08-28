"use client";

import axios from "@/helpers/axios";
import { ColorType } from "@/helpers/color-type";
import { IMAGE_SPRITES } from "@/helpers/config";
import Loader from "@/section/loading";
import { PokemonDetail } from "@/type/pokemon";
import {
  IconChevronLeft,
  IconLineHeight,
  IconNorthStar,
  IconRulerMeasure,
  IconWeight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
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
      setTimeout(() => setLoading(false), 400);
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

      <div className="flex flex-col gap-6 w-full mb-16 md:mb-0">
        <div className="flex xl:hidden flex-col">
          <div className="flex items-center gap-4 w-fit">
            <Link href="/client-rendering" className="chip-type cursor-pointer">
              <IconChevronLeft />
            </Link>
            {details?.types?.map((item, key) => (
              <div key={key} className="chip-type">
                <Image
                  src={`/assets/types/${item.type.name}.png`}
                  width={24}
                  height={24}
                  alt="Pokemon type"
                />
                <p className="text-sm md:text-base">{item.type.name}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-1 mt-3">
            <p className="text-[48px] leading-none md:text-6xl font-semibold capitalize">
              {details?.name}
            </p>
            <p className="text-lg md:text-2xl text-white/35 mt-auto">{`#${details?.order}`}</p>
          </div>
        </div>

        <div className="flex flex-col gap-20 md:gap-6 xl:gap-0 xl:flex-row h-full">
          <div className="hidden xl:flex flex-col min-w-[475px]">
            <div className="flex items-center gap-4 w-fit">
              <Link
                href="/client-rendering"
                className="chip-type cursor-pointer"
              >
                <IconChevronLeft />
              </Link>
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

            <div className="flex gap-1 mt-4">
              <p className="text-6xl font-semibold capitalize">
                {details?.name}
              </p>
              <p className="text-2xl text-white/35 mt-auto">{`#${details?.order}`}</p>
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
            <div className="flex relative w-full h-[365px] md:h-[685px] xl:h-full items-center justify-center overflow-hidden xl:pr-24">
              <div
                className="absolute w-[275px] md:w-[375px] h-[275px] md:h-[375px] rounded-full border-2 border-dashed border-slate-500/15 z-[3]"
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
                  <div className="h-full w-full bg-background rounded-full" />
                </div>
              </div>
              <div
                className="absolute w-[355px] md:w-[535px] h-[355px] md:h-[535px] rounded-full border-2 border-dashed border-slate-500/15 z-[2]"
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
                  <div className="h-full w-full bg-background rounded-full" />
                </div>
              </div>
              <div
                className="absolute w-[435px] md:w-[685px] h-[435px] md:h-[685px] rounded-full border-2 border-dashed border-slate-500/15 z-[1]"
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
                  <div className="h-full w-full bg-background rounded-full" />
                </div>
              </div>
              <div className="flex h-full w-full z-[3] items-center justify-center">
                <figure className="relative w-[225px] md:w-[325px] h-[225px] md:h-[325px]">
                  <Image
                    src={IMAGE_SPRITES(Number(details?.id))}
                    alt={`Pokemon ${details?.name}`}
                    fill
                    sizes="400px"
                    className="object-cover object-center"
                  />
                </figure>
              </div>
            </div>

            <div className="flex flex-col absolute bottom-[-54px] right-0 md:right-[40px] md:bottom-auto xl:right-0 z-[10]">
              <ul className="flex md:flex-col gap-2 border border-white/15 rounded-lg p-2">
                <li className="detail-pokemon-list">
                  <IconNorthStar className="rotate-90 w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                  <p className="text-xs">{details?.base_experience || 0} xp</p>
                </li>
                <li className="detail-pokemon-list">
                  <IconRulerMeasure className="rotate-90 w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                  <p className="text-xs">{(details?.height || 0) / 10} m</p>
                </li>
                <li className="detail-pokemon-list">
                  <IconWeight className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                  <p className="text-xs">{(details?.weight || 0) / 10} kg</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex xl:hidden flex-col border border-white/15 rounded-lg p-4 gap-4 w-full md:w-fit">
            <p className="text-base md:text-lg font-medium">Stats</p>

            <section className="flex flex-col gap-4">
              {details?.stats?.map((pokeStat, key) => (
                <div key={key} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <p className="capitalize text-xs md:text-sm">
                      {pokeStat?.stat?.name}
                    </p>

                    <p
                      className="font-medium leading-none text-xs md:text-sm"
                      style={{ color: ColorType(type) }}
                    >
                      {pokeStat?.base_stat}
                    </p>
                  </div>

                  <div className="h-2 w-full md:w-64 rounded-full bg-slate-200/15">
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
        </div>
      </div>
    </>
  );
}
