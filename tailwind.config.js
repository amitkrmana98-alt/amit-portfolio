/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A17',
          900: '#0A1128',
          800: '#0B132B',
          700: '#1C2541',
          600: '#2A365C',
        },
        electric: {
          500: '#2563EB',
          400: '#3B82F6',
          300: '#60A5FA',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive', 'sans-serif'],
      }
    },
  },
  plugins: [],
}