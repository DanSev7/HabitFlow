/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        inactive: "#d8d8d8",
        background: "#242424",
        border: "#0061FF1A",
        card: "#1C1C1C",
        text: "#FFFFFF",
        textSecondary: "#A3A3A3",
      },
    },
  },
  plugins: [],
}