/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        // primary
        soft_blue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        // neutral
        very_dark_blue_main: "hsl(217, 54%, 11%)",
        very_dark_blue_card: "hsl(216, 50%, 16%)",
        very_dark_blue_line: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

