/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0a0e27',
        'terminal-bg-light': '#1a1f3a',
        'terminal-text': '#c5c8c6',
        'terminal-green': '#00ff41',
        'terminal-cyan': '#00d9ff',
        'terminal-yellow': '#ffeb3b',
        'terminal-blue': '#2196f3',
        'terminal-red': '#ff5252',
        'terminal-link': '#64b5f6',
      },
      fontFamily: {
        mono: ['Fira Code', 'Share Tech Mono', 'Courier New', 'monospace'],
        sans: ['Fira Code', 'Share Tech Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(0, 255, 65, 0.3), 0 0 40px rgba(0, 255, 65, 0.1)',
      },
    },
  },
  plugins: [],
}
