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
        gold: {
          DEFAULT: "#FFD200",
          50:  "#FFFDE0",
          100: "#FFF9B0",
          200: "#FFF480",
          300: "#FFEE55",
          400: "#FFE82A",
          500: "#FFD200",
          600: "#E6BC00",
          700: "#BFA000",
          800: "#997F00",
          900: "#735F00",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        "gold":    "0 4px 18px rgba(255,210,0,0.4)",
        "gold-lg": "0 8px 36px rgba(255,210,0,0.5)",
        "soft":    "0 2px 16px rgba(0,0,0,0.06)",
        "soft-lg": "0 8px 40px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
