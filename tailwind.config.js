/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      helvetic: "helvetic",
      helveticLight: "helveticLight",
      second: "second",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
