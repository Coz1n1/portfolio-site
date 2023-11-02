/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
      animation: {
        liquid: "liquid 10s linear infinite alternate",
        border: "background ease infinite",
      },
      keyframes: {
        liquid: {
          "0%, 100%": { borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" },
          "14%": { borderRadius: "40% 60% 54% 46% / 49% 60% 40% 51%" },
          "28%": { borderRadius: "54% 46% 38% 62% / 49% 70% 30% 51%" },
          "42%": { borderRadius: "61% 39% 55% 45% / 61% 38% 62% 39%" },
          "56%": { borderRadius: "61% 39% 67% 33% / 70% 50% 50% 30%" },
          "70%": { borderRadius: "50% 50% 34% 66% / 56% 68% 32% 44%" },
          "84%": { borderRadius: "46% 54% 50% 50% / 35% 61% 39% 65%" },
        },
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
    safelist: [],
  },
  plugins: [],
};
