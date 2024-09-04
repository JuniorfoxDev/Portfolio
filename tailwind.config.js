/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins: ['Poppins','system-ui'],
        sevillo: ["Sevillana", 'cursive'],
      },
      backgroundImage : {
        'nav-text':'linear-gradient(115deg, #0c0014, #117aca)',
        'box-text': 'linear-gradient(115deg, #3c8ce7, #00eaff)',
        'image': 'url(`https://devakshay.vercel.app/media/Topographic-EZTJWYCO.svg`)',
        'ab-text': 'linear-gradient(115deg, #fab2ff, #1904e5)',
        'card-border':'linear-gradient(115deg, #5efce8, #736efe)',
        'a-text': 'linear-gradient(115deg, #004ff9, #000000)',
      },
      backgroundClip : {
        'text' : 'text',
      },
      textFillColor : {
        'transparent':'transparent',
      }
    },
  },
  plugins: [],
}