/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fffe',
          100: '#ccfffe',
          200: '#99fffe',
          300: '#5dfdfe',
          400: '#22f5f7',
          500: '#0a9396',
          600: '#005f73',
          700: '#004d5c',
          800: '#003b45',
          900: '#002a2f',
        },
        secondary: {
          50: '#f0fffe',
          100: '#ccfffe',
          200: '#99fffe',
          300: '#5dfdfe',
          400: '#22f5f7',
          500: '#0a9396',
          600: '#088b8e',
          700: '#067275',
          800: '#04585b',
          900: '#023e41',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#ee9b00',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#5f5f5f',
          700: '#3f3f46',
          800: '#2f2f2f',
          900: '#18181b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

