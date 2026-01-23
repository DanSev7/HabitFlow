/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular', 'sans-serif'],
        rubikBold: ['Rubik-Bold', 'sans-serif'],
        rubikSemiBold: ['Rubik-SemiBold', 'sans-serif'],
        rubikLight: ['Rubik-Light', 'sans-serif'],
        rubikExtraBold: ['Rubik-ExtraBold', 'sans-serif'],
        rubikMedium: ['Rubik-Medium', 'sans-serif'],
      },
      colors: {
        primary: "#ff0000",
        inactive: "#ececec",
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