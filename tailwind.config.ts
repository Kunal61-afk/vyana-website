import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0F172A", brand: "#2563EB", teal: "#14B8A6", mist: "#F8FAFC" }, fontFamily: { display: ["var(--font-poppins)", "sans-serif"], sans: ["var(--font-inter)", "sans-serif"] }, boxShadow: { soft: "0 12px 40px rgba(15, 23, 42, .08)" } } }, plugins: [] };
export default config;
