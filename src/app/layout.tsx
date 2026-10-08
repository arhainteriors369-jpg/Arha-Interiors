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
  metadataBase: new URL("https://arhainteriors.co.in"),
  title: {
    default: "ARHA INTERIORS | Turnkey Interior & Civil Fit-Out Contractor Bengaluru",
    template: "%s | ARHA INTERIORS",
  },
  description:
    "ARHA Interiors is a premier turnkey civil and interior fit-out contracting firm in Bengaluru. Led by industry veteran Senthil Karuppasamy. R (16+ years experience), delivering corporate, commercial, and institutional turnkey fit-outs.",
  keywords: [
    "Arha Interiors",
    "Turnkey Interior Fit out Bangalore",
    "Commercial Interior Contractor Bengaluru",
    "Corporate Office Interiors Bangalore",
    "Civil and MEP Contracting Bengaluru",
    "Turnkey Workplace Solutions",
    "Senthil Karuppasamy R",
  ],
  authors: [{ name: "Arha Interiors" }],
  alternates: {
    canonical: "https://arhainteriors.co.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/arha_logo_monogram.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/arha_logo_monogram.png",
  },
  openGraph: {
    title: "ARHA INTERIORS | Turnkey Interior & Civil Fit-Out Contractor Bengaluru",
    description:
      "Premier turnkey civil and interior fit-out contracting firm in Bengaluru specializing in commercial offices, corporate workspaces, and institutional interiors.",
    url: "https://arhainteriors.co.in",
    siteName: "ARHA Interiors",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "ARHA Interiors - Turnkey Fit-Out Execution Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARHA INTERIORS | Turnkey Interior & Civil Fit-Out Contractor Bengaluru",
    description:
      "Premier turnkey civil and interior fit-out contracting firm in Bengaluru specializing in commercial offices, corporate workspaces, and institutional interiors.",
    images: ["/images/hero-poster.jpg"],
  },
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": "https://arhainteriors.co.in/#organization",
  name: "ARHA INTERIORS",
  legalName: "Arha Interiors",
  url: "https://arhainteriors.co.in",
  logo: "https://arhainteriors.co.in/images/arha_logo_monogram.png",
  image: "https://arhainteriors.co.in/images/hero-poster.jpg",
  description:
    "Premier turnkey civil and interior fit-out contracting firm in Bengaluru specializing in commercial offices, corporate workspaces, and institutional interiors.",
  telephone: "+917338138361",
  email: "arhainteriors369@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No - 4, 8th Cross, 7th Main Road, Balaji Layout, Hongasandra",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560076",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.8988",
    longitude: "77.6253",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Senthil Karuppasamy. R",
    jobTitle: "Proprietor & Principal Director",
  },
  taxID: "29ESKPS8538H1ZT",
  priceRange: "$$$",
  areaServed: {
    "@type": "City",
    name: "Bengaluru",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessStructuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#08120D] text-[#F4EFEA] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0B1912]">
        {children}
      </body>
    </html>
  );
}
