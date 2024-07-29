/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // animation for left top github link
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-25deg)" },
          "40%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(-25deg)" },
          "80%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "octo-arm": "wave 500ms ease-in-out infinite",
      },

      // box shadow
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 10px 20px rgba(0,0,0,.7)",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Raleway", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      laptop: "900px",
      desktop: "1170px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#262626",
      },
      ocher: {
        50: "#fbf8ef",
        100: "#f4ead1",
        200: "#e9d5a1",
        300: "#ddb96c",
        400: "#d5a34a",
        500: "#cb8735",
        600: "#b36a2c",
        700: "#954f28",
        800: "#7a3f26",
        900: "#653522",
        950: "#391b0f",
      },
      gold: {
        50: "#f7f7ef",
        100: "#ece9d5",
        200: "#dbd5ad",
        300: "#c7b97d",
        400: "#b6a059",
        500: "#ae944f",
        600: "#8f733f",
        700: "#735835",
        800: "#614a32",
        900: "#553f2e",
        950: "#302118",
      },
    },
  },
  plugins: [],
};
