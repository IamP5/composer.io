/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'primary': '#F5EDCE',
      'secondary': '#89C4E1',
      'tertiary': '#58287F',
      'text': '#1A0000',
    },
    extend: {},
  },
  plugins: [],
}
