module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '600px'}
      },
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
        whiteText:'var(--white)',
        accentText:'var(--accent-text)',
      },
      fontFamily: {
        'sans': ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
