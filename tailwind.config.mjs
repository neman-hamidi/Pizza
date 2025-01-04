/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main" : "#FC5404"
      },
      fontFamily: {
        "vazir-light": "vazir-light",
      },
      spacing: {
        "9/10": "90%",
        "100": "400px",
      },
    },
  },
  plugins: [],
};
