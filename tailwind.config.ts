import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '992px',
      lg: '1024px',
      xl: '1280px',
      hdScreen: '1600px',
      fullHD: '1920px'
    },
    extend: {
      zIndex: {
        9: '9'
      },
      animation: {
        slideRightToLeftFadeIn: 'slideRightToLeftFadeIn 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftToRightFadeIn: 'slideRightToLeftFadeIn 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
        dotPulse: 'dotPulse 2.5s ease-in-out infinite',
        rotateLeft: 'rotateLeft 200ms linear',
        rotateRight: 'rotateRight 200ms linear',
        bounceRight: 'bounceRight 1s infinite',
        bounceLeft: 'bounceLeft 1s infinite'
      },
      flex: {
        2: '2 2 0%'
      },
      colors: {
        'primary-v2': {
          1: '#325366',
          2: '#4A7C98',
          3: '#63A6CB',
          4: '#7CCFFE',
          5: '#96D9FE',
          6: '#BEE7FF',
          7: '#E5F5FF'
        },
        'secondary-v2': '#FFB705',
        'base-v2': {
          1: '#040B10',
          2: '#081824',
          3: '#0F2D42',
          4: '#2B4C63',
          5: '#A1AFBA',
          6: '#C6CDD2',
          7: '#E3E6E8',
          8: '#FFF',
          10: '#E7EBEE'
        },
        'feedback-v2': {
          information: '#70BAE5',
          good: '#02EE7D',
          warning: '#EEC802',
          alert: '#FE4969'
        }
      },
      fontSize: {
        'display-v2-1': [
          '56px',
          {
            lineHeight: '1.2',
            fontWeight: '600'
          }
        ],
        'display-v2-2': [
          '44px',
          {
            lineHeight: '1.2',
            fontWeight: '600'
          }
        ],
        'body-v2-16': [
          '16px',
          {
            lineHeight: '1.5'
          }
        ],
        'body-v2-14': [
          '14px',
          {
            lineHeight: '22px'
          }
        ],
        'h1-v2': [
          '40px',
          {
            lineHeight: '1.2',
            fontWeight: '600'
          }
        ],
        'h2-v2': [
          '32px',
          {
            lineHeight: '1.2',
            fontWeight: '600'
          }
        ],
        'h3-v2': [
          '24px',
          {
            lineHeight: '1.2',
            fontWeight: '600'
          }
        ],
        'h5-v2': [
          '18px',
          {
            lineHeight: '1.2',
            fontWeight: '600'
          }
        ]
      },
      backgroundImage: {
        'home-hero-banner-bg': 'url("/images/home/home_hero_banner.png")'
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      },
      transitionProperty: {
        width: 'width',
        background: 'background'
      }
    }
  },
  plugins: [],
}
export default config
