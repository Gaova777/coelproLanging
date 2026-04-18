/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            DEFAULT: '#f37021',
            50: '#fff5ee',
            100: '#ffe6d4',
            200: '#ffc9a8',
            300: '#ffa471',
            400: '#ff7a38',
            500: '#f37021',
            600: '#e4570e',
            700: '#bd420d',
            800: '#963613',
            900: '#782f13',
          },
          navy: {
            DEFAULT: '#0a2e5c',
            50: '#f0f5fb',
            100: '#dbe6f3',
            200: '#bdd2ea',
            300: '#8eb3d8',
            400: '#588ec1',
            500: '#3671ac',
            600: '#255990',
            700: '#1f4875',
            800: '#153258',
            900: '#0a2e5c',
            950: '#071f3d',
          },
          sand: '#e8e3d8',
          stone: '#82847C',
          ink: '#0B0E14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(10,46,92,0.04), 0 4px 20px rgba(10,46,92,0.06)',
        'glow-orange': '0 20px 60px -20px rgba(243,112,33,0.45)',
        'glow-navy': '0 20px 60px -20px rgba(10,46,92,0.35)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 20px 40px -20px rgba(10,46,92,0.15)',
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(10,46,92,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,46,92,0.05) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse at center, rgba(243,112,33,0.15) 0%, transparent 70%)',
        'gradient-brand': 'linear-gradient(135deg, #f37021 0%, #e4570e 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0a2e5c 0%, #071f3d 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
