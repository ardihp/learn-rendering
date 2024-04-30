"use client";

import axios from "@/helpers/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IMAGE_SPRITES } from "@/helpers/config";
import { PokemonList } from "@/type/pokemon";
import Loader from "../loading";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientView() {
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    axios.get("/pokemon").then((res) => {
      setList(res?.data?.results);
      setTimeout(() => setLoading(false), 500);
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
              <Link key={key} href={pathname + "/" + item.name}>
                <div className="flex mb-6">
                  <div className="card-pokemon">
                    <Image
                      src={IMAGE_SPRITES(Number(item.url?.split("/")?.[6]))}
                      alt={`Pokemon-${item.name}`}
                      width={160}
                      height={160}
                    />

                    <p>{item.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
