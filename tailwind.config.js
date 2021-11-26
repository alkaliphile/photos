module.exports = {
  purge: {
    // enabled: true,
    content:['./layouts/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          body: '#F2F2F2',
          text: '#F1FEF5',
          hover: '#E5E5E5'
        },
        blue: {
          DEFAULT: '#557282',
          light: '#668393',
          lighter: '#7798AB'
        },
        green: {
          DEFAULT: '#4D7566'
        }
        // 'selected-text': '#A3A3FF',
        // 'theme': '#3F3FFF',
        // 'nav': '#404053',
        // 'secondary': '#9191A4',
        // 'badge': '#3F3F51',
        // 'input-border': '#565666',
        // 'input': '#2A2A35'
      },
      fontFamily: {
        roboto: ["'Roboto'", 'sans-serif']
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}