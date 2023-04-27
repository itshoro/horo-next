const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-at-t":
          "radial-gradient(ellipse farthest-corner at top center, var(--tw-gradient-stops))",
        "gradient-radial-at-tr":
          "radial-gradient(ellipse farthest-corner at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":
          "radial-gradient(ellipse farthest-corner at top left, var(--tw-gradient-stops))",
        "gradient-radial-at-b":
          "radial-gradient(ellipse farthest-corner at bottom center, var(--tw-gradient-stops))",
        "gradient-radial-at-br":
          "radial-gradient(ellipse farthest-corner at bottom right, var(--tw-gradient-stops))",
        "gradient-radial-at-bl":
          "radial-gradient(ellipse farthest-corner at bottom left, var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        foxfire: {
          50: "#fee7eb",
          100: "#fcced8",
          200: "#fa9eb0",
          300: "#f76d89",
          400: "#f53d61",
          500: "#f20c3a",
          600: "#c20a2e",
          700: "#910723",
          800: "#610517",
          900: "#30020c",
        },
        // foxfire: {
        //   50: "#FDF6E6",
        //   100: "#FDE6E6",
        //   200: "#FDCFCF",
        //   300: "#FFA5A5",
        //   400: "#FA637E",
        //   500: "#E32351",
        //   600: "#F40B3A",
        //   700: "#B20226",
        //   800: "#86001B",
        //   900: "#48000F",
        // },
      },
    },
  },
  plugins: [],
};
