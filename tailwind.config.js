module.exports = {
  purge: {
    enabled: true,
    content:['./layouts/**/*.html', './assets/js/maximize.js']
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
          light: '#5A7981',
          lighter: '#7798AB'
        },
        green: {
          DEFAULT: '#4D7566'
        }
      },
      fontFamily: {
        roboto: ["'Roboto'", 'sans-serif']
      },
      height: {
        '25vh': '25vh',
        '50vh': '50vh',
        'less-sm-header': 'calc(100vh - 3.5rem)'
      },
      minWidth: {
        '1/2': '50%'
      },
      maxWidth: {
        '1/2': '50%'
      },
      minHeight: {
        '50vh': '50vh'
      },
      maxHeight: {
        'modal-img': 'calc(100vh - 4rem)'
      },
      outline: {
        green: '2px solid #4D7566'
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}