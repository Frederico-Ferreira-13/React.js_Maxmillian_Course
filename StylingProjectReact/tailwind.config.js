/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isto avisa o Tailwind para ler todos os teus ficheiros JSX!
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}

