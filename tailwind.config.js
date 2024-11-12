/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#151312",
        color1: "#353334",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        color1: "#353334",
        color2: "#998F8F",
      },
      width: {
        width1: "600px",
        width2: "910px",
        width3: "720px",
        width4: "610px",
        width5: "300px",
        width6: "300px",
        width7: "75vw",
      },
      height: {
        height1: "450px",
      },
      borderColor: {
        color1: "#7141AF",
      },
      screens: {
        xs: "480px", // Custom screen size for extra small devices
        sm: "640px", // Small devices
        xsm: "809px",
        md: "1084px", // Medium devices
        xmd: "1370px",
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2x Extra large devices
        "3xl": "1920px", // Custom screen size for even larger screens
      },
      margin: {
        m1: "11px",
      },
    },
  },
  plugins: [],
};
