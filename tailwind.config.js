module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg:'var(--main-background)',
        toggleBg: 'var(--toggle-background-keypad-background)',
        screenBg: 'var(--screen-background)',
        keyBgSec:'var(--key-background-secondary)',
        keySahdowSec:'var(--key-shadow-secondary)',
        KeyBgAcc:'var(--key-background-accent)',
        keyShadowAcc:'var(--key-shadow-accent)',
        keyBgPrimary:'var(--key-background-primary)',
        keyShadowPrimary:'var(--key-shadow-primary)',
        darkText:'var(--dark-text)',
        veryDarkText:'var(--very-dark-text)',
        whiteText:'var(--white)'
      },
      fontFamily: {
        'sans': ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
