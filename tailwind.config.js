/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#0a0a0f',
                    800: '#13131a',
                    700: '#1a1a24',
                    600: '#24243a',
                },
                accent: {
                    primary: '#8b7dd8',
                    secondary: '#6c63ff',
                    muted: '#a99bdb',
                    light: '#c4b9f0',
                },
                neutral: {
                    100: '#f8f8fa',
                    200: '#e8e8ee',
                    300: '#c8c8d4',
                    400: '#a8a8b8',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
            },
            fontSize: {
                'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-md': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
                'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-soft': 'linear-gradient(135deg, var(--tw-gradient-stops))',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 0.8s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
