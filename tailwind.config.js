/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF2A85',
          hotpink: '#FF0F7B',
          softpink: '#FFF0F5',
          blush: '#FFE3EC',
          coral: '#FF4D6D',
          waffle: '#F59E0B',
          'waffle-light': '#FEF3C7',
          chocolate: '#2B091C',
          dark: '#18040F',
          cream: '#FFFBF7',
          mint: '#10B981'
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Fredoka"', '"Outfit"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 25px rgba(255, 42, 133, 0.5)',
        'neon-sm': '0 0 10px rgba(255, 42, 133, 0.35)',
        'soft-pink': '0 10px 30px -5px rgba(255, 42, 133, 0.15)',
        'card': '0 8px 30px rgba(43, 9, 28, 0.06)'
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
