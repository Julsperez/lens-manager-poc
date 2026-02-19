/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#E2E2E2', // Textos principales
                    accent: '#FF4500', // Naranja vibrante
                    dark: '#121212',   // Fondo principal
                    surface: '#1E1E1E', // Cards y paneles
                },
                status: {
                    success: '#10B981', // Verde esmeralda
                    warning: '#F59E0B', // Ámbar
                    error: '#EF4444',   // Carmesí
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            }
        },
    },
    plugins: [],
}
