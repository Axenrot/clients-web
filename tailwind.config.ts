import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
        sky: "#2679F8", // Sky Blue
        sea: "#0eafd4", // Sea Blue
        warm: "#f39011", // Warm Orange
        hot: "#e9453b", // Hot Red
        success: "#32b07e", // Jungle Green
        neutral: { light: "#f4f4f4", dark: "#e7e7e7" }, // Neutral Gray
        dark: "#101828", // Dark Gray
      },
    },
  },
  plugins: [],
};
export default config;
