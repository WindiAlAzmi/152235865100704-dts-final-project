/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "win-1": "#667eea",
        "win-2": "#764ba2",
        "win-3": "#accbee",
        "win-4": "#e7f0fd",
        "win-5": "#ADCCEF",
        "win-6": "#E7F0FD",
        "win-7": "#D0DAE0",
        "win-8": "#E2EBF0",
        "win-9": "#A2C5FE",
        "win-10": "#C2E9FC",
      },
      screens: {
        smaller: { max: "639px" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
