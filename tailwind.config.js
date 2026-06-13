/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712',
          card: '#0b0f19',
          border: '#1e293b',
          accent: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 20s infinite ease-in-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -30px) rotate(90deg)' },
          '50%': { transform: 'translate(-20px, 20px) rotate(180deg)' },
          '75%': { transform: 'translate(20px, 30px) rotate(270deg)' },
        }
      }
    },
  },
  plugins: [],
}
