module.exports = {
  content: [
    "./src/**/*.{js,html}",
    "./src/features/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pStart: ["Pstart"]
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(0em)' },

          '60%': { transform: 'translateY(-0.2em)' },

          '100%': { transform: 'translateY(0em)' },
        },
      },

      keyframes: {
        breathing: {
          '0%': { transform: 'scale(0.95)' },

          '25%': { transform: 'scale(1)' },

          '60%': { transform: 'scale(0.95)' },

          '100%': { transform: 'scale(0.95)' },
        },
      },
    },
    animation: { wave: 'wave-text 1s ease-in-out infinite', },
    animation: { breathing: 'breathing 4s ease-out infinite normal', },

  },
  plugins: [],
};
