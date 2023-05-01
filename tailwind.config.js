/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    screens : {
      'tablet' : '600px',
      'lg-tablet' : '905px',
      'desktop' : '1240px'
    },
    fontSize : {
      'major-xxsm' : '0.512rem',
      'minor-xxsm' : '0.579rem',
      'major-xsm': '0.64rem',
      'minor-xsm' : '0.694rem',
      'major-sm' : '0.8rem',
      'minor-sm' : '0.833rem',
      'base' : '1rem',
      'minor-l' : '1.2rem',
      'major-l' : '1.25rem',
      'minor-lg' : '1.44rem',
      'major-lg' : '1.563rem',
      'minor-xlg' : '1.728rem',
      'major-xlg' : '1.953rem'
    },
    extend: {
      colors : {
        'background' : '#CFCFCF',
        'primary' : '#1153BD',
        'school-name' : '#5D5D72',

      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
    // eslint-disable-next-line no-undef
    require('tw-elements/dist/plugin.cjs')
  ],
}

