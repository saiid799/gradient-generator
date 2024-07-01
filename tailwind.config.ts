import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23689B",
        secondary: "#487E95",
        background: "#F4F5DB",
        accent: "#D9DAB0",
        foreground: "#333333",
      },
      fontFamily: {
        alegreya: ["var(--font-alegreya-sans)"],
        proza: ["var(--font-proza-libre)"],
        sans: ["var(--font-proza-libre)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
