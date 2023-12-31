/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '770px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
    extend: {
      colors: {
        purple: '#6e62e5',
        lightPurple: '#d3cffc',
        black: '#1f2226',
        grey: '#b3b4b5',
        lightGrey: '#f3f4f8',
        purpleGray: '#eceef5',
        green: '#61d484',
        lightGreen: '#c3f9d9',
        peach: ' #ffc6b7',
        // Define more colors as needed
      },
      fontFamily: {
        custom: '"Inter", sans-serif',
      },
      fontSize: {
        xxs: ['0.5rem', '8px'],
        xs: ['0.58rem', '10px'],
        sm: ['0.7rem', '12px'],
        base: ['16px', '20px'],
        lg: ['22px', '24px'],
        xl: ['24px', '28px'],
        '2xl': ['26px', '30px'],
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
};
