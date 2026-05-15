import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary (Brand Identity)
        'primary-deep-green': '#0B8F3A',
        'primary-neon-green': '#00C853',
        
        // Base (Background / Luxury Feel)
        'base-midnight-black': '#0A0A0A',
        'base-soft-black': '#1C1C1C',
        
        // Neutral (Text / Clean Areas)
        'neutral-off-white': '#F5F5F5',
        'neutral-light-grey': '#D9D9D9',
        
        // Accent (Premium Touch)
        'accent-muted-gold': '#C6A75E',
        'accent-bright-gold': '#FFD700',
        
        // Extra
        'extra-mint-glow': '#2EF2A0',
        'extra-dark-forest': '#14532D',
      },
    },
  },
  plugins: [],
}

export default config
