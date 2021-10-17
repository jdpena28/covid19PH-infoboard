module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary:"'Poppins', sans-serif",
        secondary:"'Josefin Sans', sans-serif",
      },
      screens: {
        'sm':{'max':'639px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
