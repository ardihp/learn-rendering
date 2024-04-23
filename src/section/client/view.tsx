"use client";

import axios from "@/helpers/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IMAGE_SPRITES } from "@/helpers/config";
import { PokemonList } from "@/type/pokemon";
import Loader from "../loading";

export default function ClientView() {
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/pokemon").then((res) => {
      setList(res?.data?.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <title>Client Side Rendering | Poke Render</title>

      <div className="flex flex-col gap-4 w-full">
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </>
  );
}
