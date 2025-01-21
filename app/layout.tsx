import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { SocialSidebar } from '@/components/social-sidebar';
import { MobileSocialBar } from '@/components/mobile-social-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asiankidsdancecrew.com'),
  title: {
    default: 'Asian Kids Dance Crew | Best Dance Academy in Kasaragod',
    template: '%s | Asian Kids Dance Crew'
  },
  description: 'Asian Kids Dance Crew - Premier dance academy in Kasaragod offering classical, contemporary, western dance classes and art education for children. Join our vibrant community!',
  keywords: [
    'dance academy kasaragod',
    'dance classes kerala',
    'kids dance classes',
    'classical dance training',
    'contemporary dance kerala',
    'western dance classes',
    'art classes for kids',
    'asian kids dance crew',
    'dance school kasaragod',
    'performing arts academy',
    'children dance training',
    'dance education kerala'
  ],
  authors: [{ name: 'Asian Kids Dance Crew' }],
  creator: 'Asian Kids Dance Crew',
  publisher: 'Asian Kids Dance Crew',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/aklogo1.jpg',
    shortcut: '/aklogo1.jpg',
    apple: '/aklogo1.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/aklogo1.jpg',
    },
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://asiankidsdancecrew.com',
    siteName: 'Asian Kids Dance Crew',
    title: 'Asian Kids Dance Crew | Best Dance Academy in Kasaragod',
    description: 'Premier dance academy in Kasaragod offering classical, contemporary, western dance classes and art education for children. Join our vibrant community!',
    images: [
      {
        url: '/aklogo1.jpg',
        width: 1200,
        height: 630,
        alt: 'Asian Kids Dance Crew Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asian Kids Dance Crew | Best Dance Academy in Kasaragod',
    description: 'Premier dance academy in Kasaragod offering classical, contemporary, western dance classes and art education for children. Join our vibrant community!',
    images: ['/aklogo1.jpg'],
    creator: '@asiankidsdance',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://asiankidsdancecrew.com',
  },
  category: 'Dance Academy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/aklogo1.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "DanceSchool",
              "name": "Asian Kids Dance Crew",
              "description": "Premier dance academy in Kasaragod offering classical, contemporary, western dance classes and art education for children.",
              "url": "https://asiankidsdancecrew.com",
              "logo": "https://asiankidsdancecrew.com/aklogo1.jpg",
              "sameAs": [
                "https://www.instagram.com/asiankids_dancecrew_official",
                "https://www.facebook.com/asiankidsdancecrew",
                "https://www.youtube.com/asiankidsdancecrew"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pady road, Near Supplyco",
                "addressLocality": "Cherkala",
                "addressRegion": "Kasaragod",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.4368",
                "longitude": "75.0894"
              },
              "telephone": "+918138865559",
              "openingHours": "Sa,Su 09:00-17:30"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <SocialSidebar />
            <main className="flex-1">{children}</main>
            <MobileSocialBar />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}