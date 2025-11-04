/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#233554',
          gold: '#CDA349',
          sand: '#F4E1C1',
          dusk: '#1A1E2A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(19, 24, 40, 0.18)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(14,28,64,0.92), rgba(35,53,84,0.65))',
        'gradient-card': 'linear-gradient(160deg, rgba(35,53,84,0.82), rgba(205,163,73,0.58))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

