module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    screens: {
      sm: "0px",
      // => @media (min-width: 0px) { ... }
      md: "701px",
      // => @media (min-width: 701px) { ... }
      lg: "1025px",
      // => @media (min-width: 1025px) { ... }
      xl: "1441px",
      // => @media (min-width: 1441px) { ... }
    },
  },
  variants: {},
  plugins: [],
};  