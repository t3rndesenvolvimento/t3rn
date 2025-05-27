
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
				// New modern color system
				brand: {
					purple: {
						50: "#F5F3FF",
						100: "#EDE9FE", 
						200: "#DDD6FE",
						300: "#C4B5FD",
						400: "#A78BFA",
						500: "#8B5CF6", // Primary accent
						600: "#7C3AED",
						700: "#6D28D9",
						800: "#5B21B6",
						900: "#4C1D95",
					},
					orange: {
						50: "#FFF7ED",
						100: "#FFEDD5",
						200: "#FED7AA", 
						300: "#FDBA74",
						400: "#FB923C",
						500: "#F97316", // Burnt orange accent
						600: "#EA580C",
						700: "#C2410C",
						800: "#9A3412",
						900: "#7C2D12",
					},
					blue: {
						50: "#EFF6FF",
						100: "#DBEAFE",
						200: "#BFDBFE",
						300: "#93C5FD", 
						400: "#60A5FA",
						500: "#3B82F6", // Royal blue accent
						600: "#2563EB",
						700: "#1D4ED8",
						800: "#1E40AF",
						900: "#1E3A8A",
					},
					gray: {
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
					'0%, 100%': { boxShadow: '0 0 5px 0 rgba(139, 92, 246, 0.3)' },
					'50%': { boxShadow: '0 0 20px 0 rgba(139, 92, 246, 0.6)' },
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
					'0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
					'50%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.8)' },
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
				'gradient-brand': 'linear-gradient(135deg, #8B5CF6, #F97316, #3B82F6)',
				'gradient-purple': 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
				'gradient-orange': 'linear-gradient(135deg, #F97316, #EA580C)',
				'gradient-blue': 'linear-gradient(135deg, #3B82F6, #2563EB)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
