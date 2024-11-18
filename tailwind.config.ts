import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        background: "#0C0C0C",
        foreground: "#120821",
        main: '#320079',
        second: '#6A00FF'
      },
      colors: {
        background: "#0C0C0C",
        foreground: "#120821",
        main: '#320079',
        second: '#6A00FF'
      },
    },
  },
  plugins: [],
} satisfies Config;
