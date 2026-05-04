import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './sanity/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F3EFEA',
        sand: '#E7DFD5',
        teal: '#1F5F8B',
        gold: '#D6A32A',
        charcoal: '#3C3A37',
        ink: '#1B2F35'
      },
      boxShadow: {
        glow: '0 30px 80px rgba(35, 76, 87, 0.18)',
        soft: '0 18px 50px rgba(27, 47, 53, 0.12)'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(214, 163, 42, 0.18), transparent 30%), radial-gradient(circle at 20% 20%, rgba(35, 76, 87, 0.16), transparent 24%), linear-gradient(180deg, #f7f2ec 0%, #f3efe8 100%)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
