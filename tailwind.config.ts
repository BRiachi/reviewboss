import type { Config } from "tailwindcss"

const config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(229 231 235)",
        input: "rgb(229 231 235)",
        ring: "rgb(17 24 39)",
        background: "rgb(255 255 255)",
        foreground: "rgb(17 24 39)",
        primary: {
          DEFAULT: "rgb(37 99 235)",
          foreground: "rgb(255 255 255)",
        },
        secondary: {
          DEFAULT: "rgb(243 244 246)",
          foreground: "rgb(17 24 39)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(255 255 255)",
        },
        muted: {
          DEFAULT: "rgb(243 244 246)",
          foreground: "rgb(107 114 128)",
        },
        accent: {
          DEFAULT: "rgb(243 244 246)",
          foreground: "rgb(17 24 39)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config