/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': [ '"IBM Plex Mono"', 'ui-monospace', 'mono' ],
        'pixel': ['"Silkscreen"'],
      }
    },
  },
  plugins: [],
}

