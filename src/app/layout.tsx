import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1912",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ARHA INTERIORS | Spaces That Grow With You | Turnkey Interior & Civil Fit-Outs",
  description:
    "ARHA Interiors is a premier turnkey civil and interior fit-out partner in Bengaluru. Led by industry veteran Senthil Karuppasamy. R (16+ years experience), delivering corporate, commercial, and institutional spaces for Walmart, Google India, Shell, TATA, L'Oréal, and more.",
  keywords: [
    "Arha Interiors",
    "Turnkey Interior Fit out Bangalore",
    "Corporate Interior Design Bengaluru",
    "Civil and MEP contracting",
    "Commercial office interiors Bangalore",
    "Workplace fit-out contractor",
    "Senthil Karuppasamy R",
  ],
  authors: [{ name: "Arha Interiors" }],
  openGraph: {
    title: "ARHA INTERIORS | Turnkey Interior & Civil Fit-Out Projects",
    description: "End-to-end design, fit-out and execution for corporate, commercial and institutional spaces.",
    siteName: "ARHA Interiors",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#08120D] text-[#F4EFEA] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0B1912]">
        {children}
      </body>
    </html>
  );
}
