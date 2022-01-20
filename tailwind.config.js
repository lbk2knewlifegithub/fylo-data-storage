const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "0rem",
      },
    },
    extend: {
      colors: {
        "blue-900": "hsl(229, 57%, 11%)",
        "blue-800": "hsl(228, 56%, 26%)",
        "blue-700": "hsl(229, 7%, 55%)",
        "blue-600": "hsl(243, 100%, 93%)",
      },
      // create custom fonts here
      fontFamily: {
        mono: ["'Raleway'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    }),
  ],
};
