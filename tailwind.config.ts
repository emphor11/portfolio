import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(14, 165, 233, 0.16), 0 12px 50px rgba(6, 182, 212, 0.14)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.12) 1px, transparent 1px)",
        noise:
          "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.14), transparent 34%), radial-gradient(circle at 80% 10%, rgba(245,158,11,0.14), transparent 28%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.12), transparent 32%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.4)" },
          "100%": { boxShadow: "0 0 0 18px rgba(34, 197, 94, 0)" }
        },
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "33%": { transform: "translateY(-100%)" },
          "66%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0%)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s infinite"
      }
    }
  },
  plugins: []
};

export default config;
