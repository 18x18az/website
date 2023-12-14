import type { Config } from 'tailwindcss'
const config: Config = {
  purge: {
    mode: 'all',
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        'cooper-hewitt': 'var(--font-cooper-hewitt)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-radix')(),
    require('windy-radix-palette')()
  ]
}
export default config
