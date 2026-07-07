import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AL SADDAT TAX ADVISORS | Tax Consultancy in Mansehra, Pakistan",
  description:
    "AL SADDAT TAX ADVISORS - Your Partner in Tax Compliance & Business Success. Expert FBR, KPRA, and SECP services in Mansehra. NTN Registration, Income Tax Returns, Company Registration and more.",
  keywords:
    "tax advisors pakistan, FBR services, KPRA, SECP, NTN registration, income tax return filing, mansehra tax consultant, company registration pakistan",
  authors: [{ name: "AL SADDAT TAX ADVISORS" }],
  openGraph: {
    title: "AL SADDAT TAX ADVISORS",
    description: "Complete Tax, Business & Compliance Solutions",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
