export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e40af",
        accent: "#3b82f6",
        "neutral-dark": "#0a0f1e",
        "neutral-light": "#f8fafc",
        "teal": "#0ea5e9",
        "teal-dark": "#0284c7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}