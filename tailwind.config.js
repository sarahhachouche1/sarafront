/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorBg: "#1f1f38",
        colorBgVariant: "#2c2c6c",
        colorPrimary: "#4db5ff",
        colorPrimaryVariant: "rgba(77, 181, 255, 0.4)",
        colorWhite: "#fff",
        colorLight: "rgba(255, 255, 255, 0.6)",
        colorNav: "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
