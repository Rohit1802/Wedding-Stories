module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8f8f8',
        text: {
          primary: '#212121', // Main text color
          secondary: '#757575', // Secondary text color
          muted: '#bdbdbd', // Light text color
        },
      },
    },
  },
  plugins: [],
};