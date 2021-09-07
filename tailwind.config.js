module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'work-sans': ['"Work Sans"']
    },
    minWidth: {
      '100': '100px',
      '300': '300px',
    },
    backgroundColor: theme => ({
      transparent: 'transparent',
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
          'hover-opacity-5': 'rgba(18, 154, 166, .05)',
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
      },
      alertsColors: {
        'danger': '#DC3545',
        'success': '#28A745',
        'warning': '#FFC107',
        'info': '#0066DD',
      }
    }),
    colors: {
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
        'danger': '#DC3545',
        'success': '#28A745',
        'warning': '#FFC107',
        'info': '#0066DD',
      }
    },
    boxShadow: {
      'light-01': '0 2px 4px rgba(105, 112, 117, .2)',
      'light-02': '0 8px 16px rgba(18, 27, 33, .1)',
      'light-03': '0 24px 128px rgba(18, 27, 33, .4)',
      'dark-01': '0 2px 4px rgba(18, 27, 33, .4)',
      'dark-02': '0 4px 32px rgba(18, 27, 33, .5)',
      'dark-03': '0 24px 128px rgba(18, 27, 33, .9)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
