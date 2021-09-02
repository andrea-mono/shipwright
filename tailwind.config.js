module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'work-sans': ['"Work Sans"']
    },
    backgroundColor: theme => ({
      light: {
        'primary': '#F8FAFB',
        '01-component': '#FFF',
        '02-component': '#F9F9F9',
        'high-contrast': '#364A59',
        'medium-contrast': '#566976',
        'low-contrast': '#ACBAC3',
      },
      dark: {
        'primary': '#2E3438',
        '01-component': '#111B22',
        '02-component': '#383E42',
        'high-contrast': '#FFF',
        'medium-contrast': '#ACBAC3',
        'low-contrast': '#566976',
      },
      accents: {
        '01': {
          inactive: 'rgba(109, 205, 216, .8)',
          active: '#31AAB7',
          hover: '#129AA6',
          selected: '#21717A',
        },
        '02': {
          inactive: 'rgba(0, 120, 206, .8)',
          active: '#0078CE',
          hover: '#0069B4',
          selected: '#005A9B',
        }
      },
      alerts: {
        'danger': '#F8E0E0',
        'success': '#DFF0D8',
        'warning': '#FCF8E3',
        'info': '#B8D0EC',
      }
    }),
    colors: {
      accents: {
        '01': {
          inactive: 'rgba(109, 205, 216, .8)',
          active: '#31AAB7',
          hover: '#129AA6',
          selected: '#21717A',
        },
        '02': {
          inactive: 'rgba(0, 120, 206, .8)',
          active: '#0078CE',
          hover: '#0069B4',
          selected: '#005A9B',
        }
      },
      alerts: {
        'danger': '#DC3545',
        'success': '#28A745',
        'warning': '#FFC107',
        'info': '#0066DD',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
