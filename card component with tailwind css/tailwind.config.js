module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      width: {
        'w360': '360px',
        'w78': '78px'
      },
      height: {
        'h510': '510px'
      }, 
      colors: {
        'customBlack': '#18051B',
        'customPink': '#A823F9',
        'customYellow': '#FFE600'
      },
      borderRadius: {
        'r30': '30px',
        'r36': '36px'
      }, 
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}