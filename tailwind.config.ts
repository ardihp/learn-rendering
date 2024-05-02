import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bug: "#93bb37",
        poison: "#a663c3",
        normal: "#929aa2",
        fighting: "#d03e68",
        flying: "#94aee1",
        ground: "#d97b47",
        rock: "#c9ba8d",
        ghost: "#556ab3",
        steel: "#528b9e",
        fire: "#ff9f52",
        water: "#58a3dc",
        grass: "#5fbc5a",
        electric: "#f5d646",
        psychic: "#f9797d",
        ice: "#7cd3c7",
        dragon: "#026fc1",
        dark: "#5c5569",
        fairy: "#ee93e5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
        "spin-medium": "spin 5s linear infinite",
        "spin-fast": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
