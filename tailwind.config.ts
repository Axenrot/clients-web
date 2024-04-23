import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: colors.white,
        foreground: colors.gray[600],
        muted: colors.gray[200],
        primary: {
          lighter: colors.gray[200],
          DEFAULT: "#101828", // Dark Gray
          dark: colors.gray[950],
          foreground: colors.white,
        },
        secondary: {
          lighter: colors.indigo[200],
          DEFAULT: "#2679F8", // Sky Blue
          dark: colors.indigo[700],
          foreground: colors.white,
        },
        red: {
          lighter: colors.rose[200],
          DEFAULT: "#e9453b", // Hot Red
          dark: colors.rose[700],
        },
        orange: {
          lighter: colors.amber[200],
          DEFAULT: "#f39011", // Warm Orange
          dark: colors.amber[700],
        },
        blue: {
          lighter: colors.sky[200],
          DEFAULT: "#0eafd4", // Sea Blue
          dark: colors.sky[700],
        },
        green: {
          lighter: colors.emerald[200],
          DEFAULT: "#32b07e", // Jungle Green
          dark: colors.emerald[700],
        },

        neutral: { light: "#f4f4f4", dark: "#e7e7e7" },
      },
    },
  },
  plugins: [],
};
export default config;
