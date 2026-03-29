import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Tree Patrol Tree Service | Woodbridge, NJ',
  description: 'Top-Rated Tree Service You Can Trust. Tree Removal, Trimming & Stump Grinding – Fast, Affordable, and Fully Insured.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Tree Patrol Tree Service",
    "image": "/team.jpg",
    "telephone": "+17328744735",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Woodbridge",
      "addressRegion": "NJ",
      "addressCountry": "US"
    },
    "areaServed": ["Woodbridge, NJ", "Middlesex County, NJ"],
    "description": "Top-Rated Tree Service You Can Trust. Tree Removal, Trimming & Stump Grinding – Fast, Affordable, and Fully Insured."
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
