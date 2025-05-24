/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "320px",
      "1sm": "375px",
      "2sm": "425px",
      "3sm": "572px",
      "4sm": "680px",
      md: "768px",
      "2md": "872px",
      lg: "976px",
      "1lg": "1024px",
      "2lg": "1280px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1780px",
      "4xl": "1870px",
    },
    extend: {},
  },
  plugins: [],
};
