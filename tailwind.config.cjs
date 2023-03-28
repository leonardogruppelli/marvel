/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.ts",
    "./nuxt.config.ts",
  ],
  theme: {
    extend: {
      animation: {
        loading: "loading 5s linear forwards",
        load: "load 1s linear forwards",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {
        loading: {
          "0%": { width: 0 },
          "25%": { width: "20%" },
          "50%": { width: "25%" },
          "75%": { width: "40%" },
          "100%": { width: "60%" },
        },
        load: {
          to: { width: "100%", opacity: 0 },
        },
      },
      screens: {
        xs: "480px",
      },
      spacing: {
        85: "21.25rem",
        90: "22.5rem",
        "2/3": "150%",
      },
    },
  },
  plugins: [],
};
