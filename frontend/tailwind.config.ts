import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        primary: {
          500: '#3B82F6',
        },
        secondary: {
          500: '#6B7280',
        },
        accent: {
          500: '#EF4444',
        },
        background: '#FFFFFF',
        surface: {
          50: '#F9FAFB',
        },
        text: {
          primary: '#1F2937',
          secondary: '#6B7280',
        },
        border: {
          DEFAULT: '#E5E7EB',
        },

        // Dark Mode
        dark: {
          primary: {
            400: '#60A5FA',
          },
          secondary: {
            400: '#9CA3AF',
          },
          accent: {
            400: '#F87171',
          },
          background: '#111827',
          surface: {
            800: '#1F2937',
          },
          text: {
            primary: '#F9FAFB',
            secondary: '#D1D5DB',
          },
          border: {
            DEFAULT: '#374151',
          },
        }
      },
      spacing: {
        '0': '0px',
        '0.25': '0.25rem', // 4px
        '0.5': '0.5rem',   // 8px
        '1': '1rem',       // 16px
        '1.5': '1.5rem',   // 24px
        '2': '2rem',       // 32px
        '2.5': '2.5rem',   // 40px
        '3': '3rem',       // 48px
        '3.5': '3.5rem',   // 56px
        '4': '4rem',       // 64px
        '5': '5rem',       // 80px
        '6': '6rem',       // 96px
        '7': '7rem',       // 112px
        '8': '8rem',       // 128px
        '10': '10rem',     // 160px
        '12': '12rem',     // 192px
        '16': '16rem',     // 256px
        '20': '20rem',     // 320px
        '24': '24rem',     // 384px
        '32': '32rem',     // 512px
        '40': '40rem',     // 640px
        '48': '48rem',     // 768px
        '56': '56rem',     // 896px
        '64': '64rem',     // 1024px
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;