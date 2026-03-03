/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0a3f31", // Dark green identity
          accent: "#2e7d63", // Gradient secondary
          hover: "#f1f5f9", // Light gray hover
        },
      },
      width: {
        sidebar: "256px",
      },
    },
  },
  plugins: [],
};
