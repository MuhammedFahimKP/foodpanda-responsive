/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/**/*.html",
    "./build/JS/*.js",
    
    ],
  theme: {
    extend: {
      fontFamily:{
        'helva':['Helva'],
      },
    },
    
  },
   
}

