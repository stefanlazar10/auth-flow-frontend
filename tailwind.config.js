/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-green':'#22577A',
        'grey':{100:'#B2B2B225',
                 200:'#D9D9d9',
                 300:'#5F5F5F'}
    },
  },
  plugins: [],
}
}

