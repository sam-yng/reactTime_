module.exports = {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pStart: ["Pstart"]
      },
      keyframes: {
        breathing: {
          '0%': {
            transform: 'scale(0.95)'
          },

          '25%': {

            transform: 'scale(1)'
          },

          '60%': {

            transform: 'scale(0.95)'
          },

          '100%': {

            transform: 'scale(0.95)'
          },
        },
      },
    },
    animation: {
      breathing: 'breathing 4s ease-out infinite normal',
    }
  },
  plugins: [],
}
