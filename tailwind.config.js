/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      FamiljenGrotesk: ["Familjen Grotesk", "sans-serif"],
      FjallaOne: ["Fjalla One", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
