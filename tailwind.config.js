/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Ejemplo de configuración para el breakpoint xs (extra small)
        'sm': '640px',  // Ejemplo de configuración para el breakpoint sm (small)
        'md': '768px',  // Ejemplo de configuración para el breakpoint md (medium)
        'lg': '1024px', // Ejemplo de configuración para el breakpoint lg (large)
        'xl': '1280px', // Ejemplo de configuración para el breakpoint xl (extra large)
        // Puedes agregar más breakpoints según tus necesidades
      },
      fontSize: {
        '3xs': '0.4rem',     // extra extra sExtra Small
        '2xs': '0.5rem',     // extra Extra Small
        'xs': '0.75rem',     // Extra Small
        'sm': '0.875rem',    // Small
        'base': '1rem',     // Default
        'lg': '1.125rem',    // Large
        'xl': '1.25rem',     // Extra Large
        '2xl': '1.5rem',     // 2X Large
        '3xl': '3.5rem',
        '25xl': '1.8rem',     // 2X Large
        // Add more font sizes as needed
      },
    },
  },
  plugins: [],
}
