/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-bg': "url('./src/assets/images/bg-header-desktop.svg')",
        'mobile-bg': "url('./src/assets/images/bg-header-mobile.svg')"

      },
      colors: {
        'background': {
          'light-grayish-cyan': ' hsl(180, 52%, 96%)',
          'desaturated-dark-cyan': 'hsl(180, 29%, 50%)'
        },
        'light-grayish-cyan': ' hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'v-dark-grayish-cyan': ' hsl(180, 14%, 20%)'

      },
      fontSize:{
        'body':'15px'
      }
    },
  },
  plugins: [],
}

