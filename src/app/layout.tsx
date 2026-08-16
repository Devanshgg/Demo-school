import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goshen School | Quality Education, Personality Development",
  description: "Welcome to Goshen School. Empowering young minds with knowledge, character, and confidence through 25+ years of academic excellence and modern digital school management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#F1F6F9] font-sans text-[#0B192C]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
