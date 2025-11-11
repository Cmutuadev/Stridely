export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#2d7a7a",
        accent: "#ff6b35",
        "neutral-dark": "#0f0f0f",
        "neutral-light": "#f8f9fa",
        "teal": "#2d7a7a",
        "teal-dark": "#1f5555",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}