/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jakartasans-sb": ['"JakartaSans-SemiBold"', "sans-serif"],
        "jakartasans-b": ['"JakartaSans-Bold"', "sans-serif"],
        "jakartasans-xb": ['"JakartaSans-ExtraBold"', "sans-serif"],
      },

      colors: {
        limey: "#72CA2D",
        orangey: "#CA662D",
        bluey: "#2C3CD1",
        purpey: "#5922F6",
        pinkey: "#F24C6A",
        pulpey: "#C1852A",
        cyanny: "#2C8CD1",
      },
    },
  },
  plugins: [],
};
