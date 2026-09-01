import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          brand: "#D41710",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#F0D080",
        },
        cream: {
          DEFAULT: "#F7F2EA",
          mid: "#EDE8DF",
        },
        ink: {
          DEFAULT: "#111111",
          mid: "#333028",
          light: "#555048",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
