module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#346780",
        secondary: "#2998FF",
      },
      borderColor: (theme) => ({
        DEFAULT: theme("colors.gray.300", "currentColor"),
        primary: "#346780",
        secondary: "#2998FF",
      }),
      backgroundColor: (theme) => ({
        primary: "#346780",
        secondary: "#2998FF",
        grayPrimary: "#F5F5F7",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
