import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkred: {
          background: "#290505",
          header: "#D7224D",
        },
        spotlight: {
          1: "#890000",
          2: "#510018",
          3: "#FF006B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
