/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:
  {
    extend:
    {
      colors:
      {
        darkA0: "var(--dark-a0)",
        lightA0: "var(--light-a0)",

        primaryA0: "var(--primary-a0)",
        primaryA10: "var(--primary-a10)",
        primaryA20: "var(--primary-a20)",
        primaryA30: "var(--primary-a30)",
        primaryA40: "var(--primary-a40)",
        primaryA50: "var(--primary-a50)",

        surfaceA0: "var(--surface-a0)",
        surfaceA10: "var(--surface-a10)",
        surfaceA20: "var(--surface-a20)",
        surfaceA30: "var(--surface-a30)",
        surfaceA40: "var(--surface-a40)",
        surfaceA50: "var(--surface-a50)",
      },
      fontFamily:
      {
        default: [
          "montserrat",
        ]
      },
    },
  },
  plugins: [],
};
