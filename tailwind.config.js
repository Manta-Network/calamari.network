const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: '#0d0b0e',
      black1: '#202231',
      white: colors.white,
      orange: '#E65069',
      orange1: '#ED5D5F',
      gray: '#8C95A7',
      gray1: '#373D49',
      gray2: '#DED1D6',
      'gs-black': '#050D32',
    },
    fontFamily: {
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
      'red-hat': ['RedHatMono'],
    },
    screens: {
      sm: { min: '0px', max: '1400px' },
      lg: { min: '1401px' },
    },
    extend: {
      backgroundImage: {
        'giant-squid': 'var(--giantsquid-navbar-bg)',
      },
    },
  },
};
