import React from "react";
import axios from "@/helpers/axios";

export default async function ServerRendering() {
  const data = await getData();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-4xl">Server Rendering</p>

      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

async function getData() {
  const res = await axios.get("/pokemon");

  return res?.data?.results;
}
