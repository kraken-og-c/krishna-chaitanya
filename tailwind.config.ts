import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ytRed: '#FF0000',
        ytYellow: '#FFD400',
        darkBase: '#090909',
        darkSurface: '#121212'
      },
      boxShadow: {
        glow: '0 0 30px rgba(255,0,0,0.35)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      }
    }
  },
  plugins: []
} satisfies Config
