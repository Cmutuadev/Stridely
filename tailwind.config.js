export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",        // Slate blue-black (looks modern and serious)
        secondary: "#2563eb",      // Standard blue
        accent: "#60a5fa",         // Soft blue accent for buttons/links
        "neutral-dark": "#0a0f1e", // Very dark background for footer/sections
        "neutral-light": "#f1f5f9",// Pale gray for cards/backgrounds
        teal: "#14b8a6",           // Professional teal as alternative accent
        "teal-dark": "#0e7490",    // Muted teal for hover/shadow
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
