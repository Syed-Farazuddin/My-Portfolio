/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "300px",
        lmobile: "400px",
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
        light: "#F0F3FA",
        mlight: "#D5DEEF",
        slight: "#B1C9EF",
        textlight: "#395886",
      },
      fontFamily: {
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      // keyframes: {
      //   moveNavbar: {
      //     "0%": {
      //       transform: "translateX(-100px)",
      //     },
      //     "100%": {
      //       transform: "translateX(0px)",
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
