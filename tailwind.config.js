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