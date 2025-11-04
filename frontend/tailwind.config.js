import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f6f5ff',
          100: '#e9e6ff',
          200: '#d2cdff',
          300: '#aea3ff',
          400: '#8a7afd',
          500: '#6248f7',
          600: '#4b2ed4',
          700: '#3922a6',
          800: '#271678',
          900: '#1a0f51',
        },
        accent: '#ffb347',
        'accent-dark': '#f0802c',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(28,12,64,0.85), rgba(98,72,247,0.85))',
      },
      boxShadow: {
        glow: '0 20px 35px rgba(98, 72, 247, 0.35)',
      },
    },
  },
  plugins: [forms, typography],
}

