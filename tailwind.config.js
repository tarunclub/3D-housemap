module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dosis: ["Dosis", "poppins"],
        Poppins: ["Poppins", "Dosis"],
        Ubuntu: ["Ubuntu", "Poppins"],
      },
    },
  },
  plugins: [],
};