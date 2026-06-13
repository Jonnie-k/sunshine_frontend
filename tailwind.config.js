/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EBF4FF',
          100: '#C3DAFE',
          200: '#A3BFFA',
          300: '#7F9CF5',
          400: '#667EEA',
          500: '#3B5EA6',
          600: '#2D4A8A',
          700: '#1E3A6E',
          800: '#0F2B5B',
          900: '#091D3E',
        },
        amber: {
          400: '#FBD38D',
          500: '#F5A623',
          600: '#D48806',
          700: '#B7791F',
        },
        slate: {
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(15,43,91,0.08)',
        'card-hover': '0 8px 32px rgba(15,43,91,0.14)',
      },
    },
  },
  plugins: [],
}