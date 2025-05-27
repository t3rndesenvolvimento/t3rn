
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// T3RN Brand Colors - baseadas na logo oficial
				t3rn: {
					silver: {
						50: "#F8F9FA",
						100: "#F1F3F4", 
						200: "#E8EAED",
						300: "#DADCE0",
						400: "#BDC1C6",
						500: "#9AA0A6", // Prata principal
						600: "#80868B",
						700: "#5F6368",
						800: "#3C4043",
						900: "#202124",
					},
					red: {
						50: "#FEF2F2",
						100: "#FEE2E2",
						200: "#FECACA", 
						300: "#FCA5A5",
						400: "#F87171",
						500: "#DC2626", // Vermelho principal da logo
						600: "#B91C1C",
						700: "#991B1B",
						800: "#7F1D1D",
						900: "#450A0A",
					},
					dark: {
						50: "#F9FAFB",
						100: "#F3F4F6",
						200: "#E5E7EB",
						300: "#D1D5DB",
						400: "#9CA3AF",
						500: "#6B7280",
						600: "#4B5563",
						700: "#374151",
						800: "#1F2937",
						900: "#111827",
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'custom': '15px',
				'xl': '20px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'logo-entrance': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px 0 rgba(220, 38, 38, 0.3)' },
					'50%': { boxShadow: '0 0 20px 0 rgba(220, 38, 38, 0.6)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'ping': {
					'75%, 100%': { transform: 'scale(2)', opacity: '0' },
				},
				'gradient-x': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'shimmer': {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(220, 38, 38, 0.5)' },
					'50%': { boxShadow: '0 0 25px rgba(220, 38, 38, 0.8)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'logo-entrance': 'logo-entrance 1.2s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'shimmer': 'shimmer 1.5s infinite',
				'glow': 'glow 2s ease-in-out infinite',
			},
			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
				cashDisplay: ["Cash Display", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
				roboto: ["Roboto Mono", "monospace"],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-brand': 'linear-gradient(135deg, #9AA0A6, #DC2626)',
				'gradient-silver': 'linear-gradient(135deg, #9AA0A6, #80868B)',
				'gradient-red': 'linear-gradient(135deg, #DC2626, #B91C1C)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
