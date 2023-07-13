/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      l: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "3.5xl": "2rem",
      "4xl": "2.25rem",
      "4.5xl": "2.625rem",
      "5xl": "3rem",
      "5.5xl": "3.25rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "7.5xl": "5.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
};
