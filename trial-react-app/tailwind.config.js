module.exports = {
  content: [
    "./src/**/*.{js,html}",
    "./src/features/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pStart: ["Pstart"],
        sStoke: ["Sstoke"],
        inknut: ["Inknut"],
        cCorm: ["Ccorm"]
      },

      keyframes: {
        breathing: {
          '0%': { transform: 'scale(0.95)' },

          '25%': { transform: 'scale(1)' },

          '60%': { transform: 'scale(0.95)' },

          '100%': { transform: 'scale(0.95)' },
        },
        wave: {
          '0%': { transform: 'translateY(0em)' },

          '60%': { transform: 'translateY(-0.2em)' },

          '100%': { transform: 'translateY(0em)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },

          '25%': { transform: 'translateX(2px)' },

          '50%': { transform: 'translateX(-2px)' },

          '75%': { transform: 'translateX(2px)' },

          '100%': { transform: 'translateX(0)' },
        },
        shakeY: {
          '0%': { transform: 'translateY(0)' },

          '25%': { transform: 'translateY(5px)' },

          '50%': { transform: 'translateY(-5px)' },

          '75%': { transform: 'translateY(5px)' },

          '100%': { transform: 'translateY(0)' },
        },
        typing: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
          '96%': { width: '11ch' },
          '97%': { width: '12ch' },
          '98%': { width: '13ch' },
          '99%': { width: '14ch' },
          '100%': { width: '15ch' },
        },
      },

    },


    animation: {
      wave: 'wave-text 1s ease-in-out infinite',
      breathing: 'breathing 4s ease-out infinite normal',
      shake: 'shake 0.35s infinite',
      typing: 'typing 2s ease-out .8s normal both',
    },


  },
  plugins: [],
};
