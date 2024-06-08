import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dmSans: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient-secure': 'radial-gradient(circle at top, #ffffff 0%, #FFEAEA 100%)',
        'radial-gradient-personalised': 'radial-gradient(circle at top, #ffffff 0%, #FFF8E8 100%)',
        'radial-gradient-effortless': 'radial-gradient(circle at top, #ffffff 0%, #F0EEFF 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
