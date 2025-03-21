/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Основной шрифт
      mono: ['IBMPlexMono', 'monospace'], // Моноширинный шрифт
      serif: ['Times', 'serif'], // Шрифт с засечками
      helvetica: ['Helvetica', 'sans-serif'], // Дополнительный шрифт
    },
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        50: '50px',
      },
      gap: {
        '40px': '40px',
      },

      backgroundColor: {
        viola: {
          DEFAULT: '#fff',
          dark: '#0A0E3C',
        },
        white: '#fff',
        'icons-bg': {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(255, 255, 255, 0.05);',
        },
        buttons: {
          DEFAULT: 'rgba(255, 199, 246, 0.15)',
          dark: 'rgba(255, 255, 255, 0.1);',
        },
        dots: {
          DEFAULT: '#e1e1e1',
          dark: '#fff',
        },
        contacts: '#fff7fe',
        'burger-dark': '#110452',
      },

      backgroundImage: {
        grey: {
          DEFAULT:
            'linear-gradient(90deg, rgba(255, 199, 246, 0.15) 0.03%, rgba(255, 199, 246, 0.11) 49.67%, rgba(255, 199, 246, 0.15) 99.96%)',
          dark: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.01) 49.67%, rgba(255, 255, 255, 0.05) 99.96%)',
        },
        switch:
          'linear-gradient(118deg, #fc365a 0%, #f21279 41.39%, #d549c7 92.89%)',
        gradient:
          'linear-gradient(180deg, #fc365a 0%, #f21279 41.39%, #d549c7 92.89%)',
        'cards-dark':
          'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.01) 49.67%, rgba(255, 255, 255, 0.05) 99.96%)',
        icons:
          'linear-gradient(90deg, rgba(255, 199, 246, 0.15) 0.03%, rgba(255, 199, 246, 0.11) 49.67%, rgba(255, 199, 246, 0.15) 99.96%)',
        'contacts-gradient-light':
          'linear-gradient(147deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.2) 100%)',
        'contacts-gradient-dark':
          'linear-gradient(147deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      },

      borderColor: {
        primary: {
          DEFAULT: 'rgba(255, 199, 246, 0.2)',
          dark: 'rgba(255, 255, 255, 0.1)',
        },
        icons: {
          DEFAULT: 'rgba(255, 199, 246, 0.3)',
          dark: 'rgba(255, 255, 255, 0.1)',
        },
        separator: 'rgba(255, 255, 255, 0.3)',
        links: 'rgba(255, 255, 255, 0.1)',
        blog: 'rgba(255, 199, 246, 0.5);',
        checkbox: '#6C757D',
      },

      borderRadius: {
        10: '10px',
      },

      padding: {
        60: '60px',
        100: '100px',
      },

      margin: {
        60: '60px',
      },

      width: {
        100: '100px',
      },

      height: {
        100: '100px',
      },

      lineHeight: {
        1.1: '1.1',
      },

      letterSpacing: {
        custom: '-0.04em',
        0.3: '-0.03em',
      },

      colors: {
        primary: {
          DEFAULT: '#3b3b3b',
          dark: '#fff',
        },
        dark: '#000',
        placeholder: '#6c757d',
      },

      fill: {
        gradient: {
          DEFAULT:
            'linear-gradient(118deg, #fc365a 0%, #f21279 41.39%, #d549c7 92.89%)',
          dark: '#fff',
        },
      },

      boxShadow: {
        icons: '0 16px 36px 0 rgba(0, 0, 0, 0.25)',
        iconsMobile: '0 16px 20px 0 rgba(59, 59, 59, 0.1);',
        gradient: '0 16px 20px 0 rgba(59, 59, 59, 0.1);',
      },
      animation: {
        'slow-moving-1': 'animate-1 9s ease-in-out infinite',
        'slow-moving-2': 'animate-2 10s ease-in-out infinite',
        'slow-moving-3': 'animate-3 8s ease-in-out infinite',
      },
      keyframes: {
        'animate-1': {
          '0%': { transform: 'translateY(0vh) translateX(0vmin)' },
          '50%': { transform: 'translateY(-1vh) translateX(-5vmin)' },
          '100%': { transform: 'translateY(0vh) translateX(0vmin)' },
        },
        'animate-2': {
          '0%': { transform: 'translateY(0vh) translateX(0vmin)' },
          '50%': { transform: 'translateY(1vh) translateX(4vmin)' },
          '100%': { transform: 'translateY(0vh) translateX(0vmin)' },
        },
        'animate-3': {
          '0%': { transform: 'translateY(0vh) translateX(0vmin)' },
          '50%': { transform: 'translateY(4vh) translateX(1vmin)' },
          '100%': { transform: 'translateY(0vh) translateX(0vmin)' },
        },
      },
    },
  },
};
