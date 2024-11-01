import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: 'transparent',
        current: 'currentColor',
        dark:"#1A1A1A",
        white: "#FFFFFF",
        black:"#000000",
        "softBlue": "#4FC3F7",
        "lightGray": "#C1C1C1",
        "gray": "#A9A9A9",
        "darkGrayishBlue":"#484E53",
        "veryLightGray":"#DEDEDE",
        "charlestonGreen":"#2B2B2B", 
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            "opacity": "0",
            "transform": "translate3d(0, -100%, 0)",
          },"100%": {
            "opacity":"1",
            "transform": "translate3d(0,0,0)"
          }
        },
        "fade-out-up": {
          "0%": {
            "opacity": "1",
            "transform": "translate3d(0, 0, 0)",
          },"100%": {
            "opacity":"0",
            "transform": "translate3d(0,-100%,0)"
          }
      }},
      animation:{
        "fadeInDown": "fade-in-down 1s ease-in",
        "fadeOutUp" : "fade-out-up 1s ease-in"
      }
    },
  },
  plugins: [],
}
export default config;
