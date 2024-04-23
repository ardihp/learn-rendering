import axios from "@/helpers/axios";
import { IMAGE_SPRITES } from "@/helpers/config";
import { PokemonList } from "@/type/pokemon";
import Image from "next/image";
import React from "react";

export default async function ServerView() {
  const lists = await getData();
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="columns-5 gap-6">
        {lists.map((item: PokemonList, key: number) => (
          <div className="flex mb-6" key={key}>
            <div className="flex flex-col items-center p-4 gap-6 w-full rounded-xl bg-slate-300/5 border border-white/15">
              <Image
                src={IMAGE_SPRITES(Number(item.url?.split("/")?.[6]))}
                alt={`Pokemon-${item.name}`}
                width={160}
                height={160}
              />

              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function getData() {
  const res = await axios.get("/pokemon");

  return res?.data?.results;
}
