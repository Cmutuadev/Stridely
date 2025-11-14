// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#2563eb",
        accent: "#60a5fa",
        "neutral-dark": "#0a0f1e",
        "neutral-light": "#f1f5f9",
        teal: "#14b8a6",
        "teal-dark": "#0e7490",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
