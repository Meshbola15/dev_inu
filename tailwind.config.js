/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#020f13",
        yellowImage: "#282610",
        yellow: "#FFC600",
        text_grey: "#D8CEDC",
      },
      fontFamily: {
        Bricolage_Grotesque: ["Bricolage Grotesque", "sans-serif"],
      },
      fontSize: {
        text: "16px",
        title_moblie: "32px",
        title: "64px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
};
