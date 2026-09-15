import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingActions } from "@/components/floating-actions";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
export const metadata: Metadata = {
  metadataBase: new URL("https://vyanadigital.com"),
  title: { default: "Vyana Digital | Build. Grow. Automate.", template: "%s | Vyana Digital" },
  description: "Vyana Digital builds high-converting websites, growth-focused marketing and AI automations for ambitious businesses.",
  openGraph: { type: "website", siteName: "Vyana Digital", title: "Vyana Digital | Build. Grow. Automate.", description: "Digital growth systems for ambitious businesses." },
  twitter: { card: "summary_large_image", title: "Vyana Digital | Build. Grow. Automate.", description: "Digital growth systems for ambitious businesses." }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${inter.variable} ${poppins.variable}`}><Header /><main>{children}</main><Footer /><FloatingActions /></body></html>; }
