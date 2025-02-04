import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'],
      },
      colors: {
        "color-font-primary": "#3730a3",
        "color-font-secondary": "#4f46e5",
        "color-font-tertiary": "#1e1b4b",
        "color-font-p": "#e5e5e5",
        "bg-cards": "#262626",
        "bg": "rgba(12,10,9,1)", // Corrigido para string
        "bg-gradient-color" : "linear-gradient(rgba(151,0,255,1) 0%, rgba(55,48,163,1) 70%, rgba(55,48,163,1) 80%, rgba(55,48,163,1) 100%)",
      },
      backgroundImage: {
        "gradient": "linear-gradient(90deg, rgba(55,48,163,1) 0%, rgba(55,48,163,1) 50%, rgba(151,0,255,1) 100%)",
        "gradient-button": "linear-gradient(rgba(151,0,255,1) 0%, rgba(55,48,163,1) 70%, rgba(55,48,163,1) 80%, rgba(55,48,163,1) 100%)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
} satisfies Config;