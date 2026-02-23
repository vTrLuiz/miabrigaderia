/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FFF8F0',
        cocoa: {
          50: '#FAF5F0',
          100: '#F0E6D6',
          200: '#E0CBAD',
          300: '#C9A97C',
          400: '#B08A58',
          500: '#8B6914',
          600: '#6B4F10',
          700: '#4A370B',
          800: '#2E2207',
          900: '#1A1304',
        },
        rose: {
          light: '#FDEEF0',
          DEFAULT: '#E8A0B4',
          dark: '#C4748C',
        },
        mint: {
          light: '#E8F5F0',
          DEFAULT: '#86D9CB',
          dark: '#47C9AF',
        },
        caramel: '#D4A853',
        chocolate: '#3E2723',
      },
      borderRadius: {
        blob: '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      animation: {
        blob: 'blob 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
