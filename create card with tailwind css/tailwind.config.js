module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      width: {
        'w360': '360px',
        'w76': '76px'
      }, 
      height: {
        'h343': '343px',
        'h77': '77px',
        'h26': '26px',
        'h201': '201px',
        'h60': '60px',
        'h52': '52px'
      },
      colors: {
        'customBlack': '#0A0C0E',
        'customPink': '#CD23A8',
        'customBlue': '#00D9F5',
        'customGray': '#B5C1CB',
        'gradientColor1': '#E65C00',
        'gradientColor2': '#F9D423',
      },
      borderRadius: {
        'r20': '20px'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}