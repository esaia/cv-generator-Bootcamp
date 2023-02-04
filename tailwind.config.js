/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      helvetic: "helvetic",
      helveticLight: "helveticLight",
      helveticBold: "helveticBold",
      helveticSemibold: "helveticSemibold",
      second: "second",
    },

    backgroundImage: {
      homeBackground: "url('/public/img/background.png')",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
