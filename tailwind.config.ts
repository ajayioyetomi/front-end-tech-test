import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'satoshi-ex':['Satoshi-Ex'],
      },
      screens: {
        'xs':'300px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'mlg':'840px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      width:{
        '900':'900px',
        '300':'300px',
        '250':'210px',
        '95w':'95%',
        '5/12':'calc(50% - 10px)',
        'list':'calc(100% - 80px)'
      },
      height:{
        '200':'200px',
        '250':'250px',
        '300':'300px',
        '70':'70vh',
        '75':'75vh',
        '80':'80vh',
        '85':'85vh',
        '90':'85vh',
        '95':'95vh',
        '500':'500px',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, #3D8BFF,#AB23FF)',
      }, 
      backgroundColor: {
        'gray-black':'var(--gray-background)',
      },  
      colors:{
        'gray-black':'var(--gray-background)',
      },
      minWidth:{
        '800':'800px',
      },
      fontSize:{
        'ssx':'10px'
      }

    },
  },
  variants:{
    extends:{
      
    }
  },
  plugins: [],
}
export default config
