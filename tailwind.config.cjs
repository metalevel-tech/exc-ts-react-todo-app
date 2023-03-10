/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-dark": "#242424"
      },
      transitionProperty: {
        height: "height"
      }
    }
  },
  plugins: []
};
