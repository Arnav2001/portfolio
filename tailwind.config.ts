import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width:{
        1:'1px',
        550:'34.375vw',
        800:'50vw',
        1200:'75vw',
        16:'15vw'
      },
      height:{
        1000:'70vh',
        18:'18vh',
        22:'22vh'
      },
      zIndex:{
        9000:'9000'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        customDarkPurple:"#352F44",
        customPurple:"#5C5470",
        customLightPurple:"#B9B4C7",
        customCream:"#FAF0E6"
      },
      fontSize:{
        30:'1.875rem'
      },
    },
  },
  plugins: [],
}
export default config
