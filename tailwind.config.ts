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
        "custom-orange-color": "rgb(var(--orange-color) / <alpha-value>)",
        "custom-pale-orange-color":
          "rgb(var(--pale-orange-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
