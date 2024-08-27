"use server";

import axios from "@/helpers/axios";
import { cache } from "react";

export const getData = cache(
  async ({ limit, offset = 0 }: { limit: number; offset?: number }) => {
    try {
      const res = await axios.get(`/pokemon?limit=${limit}&offset=${offset}`);

      return res?.data?.results;
    } catch (error) {
      throw new Error("Failed to get pokemon lists");
    }
  }
);

export const getDetail = cache(async (name: string) => {
  try {
    const res = await axios.get(`/pokemon/${name}`);

    return res?.data;
  } catch (error) {
    throw new Error("Failed to get detail pokemon");
  }
});
