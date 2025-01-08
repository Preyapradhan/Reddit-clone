module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redditOrange: "#FF4500",
        redditBlue: "#0079D3",
        darkBackground: "#1a1a1b",
        darkForeground: "#272729",
        darkText: "#D7DADC",
        darkBorder: "#343536",
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: []
};
