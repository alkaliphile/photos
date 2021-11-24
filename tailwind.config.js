module.exports = {
  purge: {
    // enabled: true,
    content:['./layouts/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#F2F2F2',
        // 'selected-text': '#A3A3FF',
        // 'theme': '#3F3FFF',
        // 'nav': '#404053',
        // 'secondary': '#9191A4',
        // 'badge': '#3F3F51',
        // 'input-border': '#565666',
        // 'input': '#2A2A35'
      },
      fontFamily: {
        'roboto': ["'Roboto'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}