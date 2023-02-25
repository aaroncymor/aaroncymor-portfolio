/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        white: "#F5F2EB",
        yellow: "#FCBF49",
        red: "#D62828",
        green: "#4F772D",
        orange: "#EF7F00"
      },
      keyframes: {
        'type-intro-1': {
          'from': { width: '0ch' },
          'to': { width: '8ch' }
        },
        'type-intro-2': {
          'from': { width: '0ch' },
          'to': { width: '18ch' }
        },
        'blink-caret': {
          'from': { borderColor: 'transparent' },
          'to': { borderColor: 'transparent' },
          '50%': { borderColor: '#000' }
        },
        'rotate': {
          'from': { rotate: '0deg' },
          '50%': { scale: '1 1.5' },
          'to': { rotate: '360deg' }
        }
      },
      animation: {
        'typing-intro-1': 'type-intro-1 1s steps(8, end), blink-caret 0.75s step-end infinite',
        'typing-intro-2': 'type-intro-2 1.4s steps(18, end), blink-caret 0.75s step-end infinite',
        'rotating': 'rotate 20s infinite'
      }
    }
  },
  plugins: []
};
