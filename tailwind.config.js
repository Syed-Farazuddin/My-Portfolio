/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "300px",
      },
      colors: {
        dark: "#032030",
        mdark: "#022B42",
        sdark: "#003554",
        darkblue: "#004D74",
        lightblue: "#006494",
        customblue: "#006DA4",
        mypurple: "#BA68C8",
        mywhite: "#f0f3fa",
      },
      fontFamily: {
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
