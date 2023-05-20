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
      'minor-7xsm' : '0.233rem', // 3.72px
      'minor-6xsm' : '0.279rem', // 4.47px
      'minor-5xsm' : '0.335rem', // 5.36px
      'minor-4xsm' : '0.402rem', //6.43px
      'minor-xxxsm' : '0.482rem', //7.72 px
      'major-xxsm' : '0.512rem',
      'minor-xxsm' : '0.579rem', //9.64 px
      'major-xsm': '0.64rem',
      'minor-xsm' : '0.694rem', // 11.11 px
      'major-sm' : '0.8rem', // 12.80 px
      'minor-sm' : '0.833rem', //13.33 px
      'base' : '1rem',
      'minor-l' : '1.2rem', //19.20 px
      'major-l' : '1.25rem', //20 px
      'minor-lg' : '1.44rem', //23.04 px
      'major-lg' : '1.563rem',
      'minor-xlg' : '1.728rem',
      'major-xlg' : '1.953rem',
      'minor-xxlg' : '2.074rem',
      'major-xxlg' : '2.441rem'
    },
    extend: {
      colors : {
        'background' : '#CFCFCF',
        'primary' : '#4585E5',
        'school-name' : '#5D5D72',
        
      },
      dropShadow : {
        'drop-sha' : '2px 2px 10px rgba(0, 0, 0, 0.1)',
        'drop-sha-hor' : '2px 2px 10px rgba(0, 0, 0, 0.2)'
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

