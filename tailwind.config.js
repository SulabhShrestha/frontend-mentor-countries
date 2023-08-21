/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",

        "dark-gray": "hsl(0, 0%, 52%)",

        white: "hsl(0, 0%, 100%)",
      },
      backgroundColor: {
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      textColor: {
        "very-dark-blue": "hsl(200, 15%, 8%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
