/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "BgImage": "url(./images/BgImage-front.jpg)"
      }
    },
  },
  plugins: [],
}
