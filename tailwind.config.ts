import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

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
          header: "#FF1313",
        },
        spotlight: {
          1: "#890000",
          2: "#510018",
          3: "#FF006B",
        },
        project: {
          base: "#D7224D",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};

module.exports = withMT(config);
