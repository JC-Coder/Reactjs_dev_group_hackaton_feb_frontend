/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackBg: "#000",
        browinshBg: "#212121",
      },
    },
  },
  plugins: [],
};
