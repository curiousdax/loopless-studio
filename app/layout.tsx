import type { Metadata } from "next";
import { Syne, DM_Mono, Anton } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Loopless — AI Design Consulting for Early-Stage Startups",
  description:
    "Skip the loops. Ship great UX fast. Loopless helps early-stage startups use AI to build exceptional user experiences without hiring a full-time designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable} ${anton.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
