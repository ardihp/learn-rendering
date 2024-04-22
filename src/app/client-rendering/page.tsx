"use client";

import axios from "@/helpers/axios";
import React, { useEffect, useState } from "react";

export default function ClientRendering() {
  const [lists, setList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/pokemon").then((res) => {
      setList(res?.data?.results);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-4xl">Client Rendering</p>

      {loading ? <p>Loading data...</p> : <p>{JSON.stringify(lists)}</p>}
    </div>
  );
}
