import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      colors: {
        primary: "#2A2C36",
        secondary: "#636570",
        green: "#74B200",
        grey: "#F6F5FA",
        white: "#FFFFFF",
        danger: "#F33939",
        black: "#2A2C36",
      },
    },
  },
  plugins: [],
} satisfies Config;
