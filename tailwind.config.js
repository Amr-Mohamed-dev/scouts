/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fd9f23",
        secondary: "#faad48",
        projectCard: "#292c35",
      },
    },
  },
  plugins: [],
};
