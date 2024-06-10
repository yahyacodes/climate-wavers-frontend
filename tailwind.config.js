/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graylight: "#f4f4f4",
        graydark: "#e7e7e7",
        green: "#008080",
      },
    },
  },
  plugins: [],
};
