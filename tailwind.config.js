/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: {
          950: '#070A06',
          900: '#0B0F09',
          800: '#11160E',
          700: '#181F13',
          600: '#222B1A',
        },
        accent: {
          50: '#EEFFCC',
          100: '#DAFF94',
          200: '#C0FF4E',
          300: '#A6FF2E',
          400: '#8FEE13',
          500: '#74D60C',
          600: '#56A60A',
          700: '#3F7A0A',
        },
        grade: {
          a: '#22C55E',
          b: '#EAB308',
          c: '#F97316',
        },
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        floatUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        floatUp: 'floatUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
