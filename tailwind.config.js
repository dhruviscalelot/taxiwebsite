/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        primary: "#FBB03B",
        dark: "#0B1727",
        g4: "#4D5969",
        g6: "#748194",
        light: "#F8FAFC",
        line: "#E8EEF5",

      },

      fontSize: {
        "84": ["84px", "96px"],
        "70": ["70px", "80px"],
        "64": ["64px", "74px"],
        "56": ["56px", "66px"],
        "48": ["48px", "58px"],
        "40": ["40px", "52px"],
        "36": ["36px", "46px"],
        "32": ["32px", "40px"],
        "30": ["30px", "40px"],
        "28": ["28px", "36px"],
        "26": ["26px", "36px"],
        "24": ["24px", "32px"],
        "22": ["22px", "30px"],
        "20": ["20px", "28px"],
        "18": ["18px", "26px"],
        "16": ["16px", "24px"],
        "14": ["14px", "22px"],
        "12": ["12px", "18px"],
      },

      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        header: "0px 10px 30px rgba(11, 23, 39, 0.08)",
        card: "0px 14px 40px rgba(233, 240, 248, 1)",
      },
    },
  },
  plugins: [],
};