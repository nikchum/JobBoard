/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '414px',
      xl: '1440px',
    },
    fontSize: {
      s: ['12px', '16px'],
      sx: ['13px', '25px'],
      sm: ['14px', '17px'],
      sl: ['16px', '16px'],
      normal: ['16px', '20px'],
      base: ['16px', '25px'],
      lg: ['18px', '24px'],
      lx: ['20px', '25px'],
      lh: ['24px', '30px'],
      xl: ['28px', '34.1px'],
    },
    letterSpacing: {
      tightest: '-0.75px',
      tighter: '-0.56px',
      tight: '-0.46px',
      normal: '0',
      wide: '0.21px',
      wider: '0.24px',
      widest: '0.41px',
    },
    extend: {
      boxShadow: {
        sm: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'primary-text': '#3A4562',
        'secondary-text': '#E8EBF3',
        'subtitle-text': '#878D9D',
        'primary-btn': '#384564',

        'secondary-btn': '#E4E5EA',
        'primary-bg': '#E6E9F2',
        'secondary-bg': '#FFFFFF',
        'mob-item-bg': '#EFF0F5',
        'primary-map': '#2A3047',
      },
    },
  },
  plugins: [],
};
