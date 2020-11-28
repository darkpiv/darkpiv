module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textDecoration: ['active'],
    },
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
