import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#6366f1',
        accent: '#ec4899',
      },
    },
  },
  plugins: [],
};

export default config;
