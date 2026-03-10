import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      colors: {
        pink: {
          DEFAULT: "#d4788a",
          light: "#f5d0d8",
          pale: "#fdf0f3",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#f0e0b0",
          pale: "#fdf8ee",
        },
        dark: {
          DEFAULT: "#1e1118",
          2: "#2e1a24",
        },
        muted: "#9a7282",
        cream: "#fdf7f4",
      },
    },
  },
  plugins: [],
};
export default config;
