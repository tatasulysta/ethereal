import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#7E37FF",
        textLight: "#515151",
        darkBlue: "#140C1F",
      },
      fontFamily: {
        primary: ["DM Sans", "serif"],
        secondary: ["Merriweather Sans", "serif"],
        tertiary: ["Tomorrow", "serif"],
      },
      screens: {
        xs: "414px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        xxl: "1366px",
      },
      space: {
        half: "50%",
      },
    },
  },
  plugins: [],
} satisfies Config;
