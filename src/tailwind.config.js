/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // activé en ajoutant la classe "dark" sur <html>
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // Palette reprise des variables CSS du site original
        secondary: '#8B4513',
        'secondary-dark': '#6b3610',
        gold: '#d4a574',
        'gold-light': '#f0d5b0',
        accent: '#c0392b',
      },
      keyframes: {
        floatBook: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rotation, 0deg))' },
          '25%': { transform: 'translateY(-30px) rotate(calc(var(--rotation, 0deg) + 5deg))' },
          '75%': { transform: 'translateY(20px) rotate(calc(var(--rotation, 0deg) - 5deg))' },
        },
        pulseHeart: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        pulseIcon: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 8px 30px rgba(139,69,19,0.3)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 8px 50px rgba(139,69,19,0.4)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        floatBook: 'floatBook 20s infinite ease-in-out',
        pulseHeart: 'pulseHeart 1.5s infinite',
        pulseIcon: 'pulseIcon 2s infinite',
        fadeIn: 'fadeIn 0.4s ease',
      },
    },
  },
  plugins: [],
}