import type { Metadata } from "next";
import "./globals.css";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Quantum AI",
    "image": "https://quantumaitrading.org/quantum-ai-logo.png",
    "url": "https://quantumaitrading.org",
    "applicationCategory": ["Bitcoin", "Crypto Trading Robots", "Crypto"],
    "downloadUrl": "https://quantumaitrading.org/en/auth/signup/",
    "screenshot": "https://quantumaitrading.org/dashboard.jpg",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quantum AI",
    "url": "https://quantumaitrading.org",
    "logo": "https://quantumaitrading.org/quantum-ai-logo.png",
    "brand": {
      "@type": "Brand",
      "name": "Quantum AI"
    },
    "review": {
      "@type": "Review",
      "name": "Quantum AI",
      "reviewBody": "Quantum AI harnesses the remarkable power of quantum computing combined with AI, skillfully analyzing market trends to aid in informed trading decisions.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Liam Robertson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Quantum AI"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Organization"],
        "@id": "https://quantumaitrading.org/#person",
        "name": "quantumaitrading.org"
      },
      {
        "@type": "WebSite",
        "@id": "https://quantumaitrading.org/#website",
        "url": "https://quantumaitrading.org",
        "name": "quantumaitrading.org",
        "publisher": {
          "@id": "https://quantumaitrading.org/#person"
        },
        "inLanguage": "en-GB",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://quantumaitrading.org/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://quantumaitrading.org/#webpage",
        "url": "https://quantumaitrading.org/",
        "name": "Quantum AI - Your Trusted Trading Partner",
        "datePublished": "2023-04-24T01:23:07+00:00",
        "dateModified": "2024-10-01T15:20:37+00:00",
        "about": {
          "@id": "https://quantumaitrading.org/#person"
        },
        "isPartOf": {
          "@id": "https://quantumaitrading.org/#website"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "Person",
        "@id": "https://quantumaitrading.org/author/wpx_/",
        "name": "wpx_",
        "url": "https://quantumaitrading.org/author/wpx_/",
        "image": {
          "@type": "ImageObject",
          "@id": "https://secure.gravatar.com/avatar/ace3d71ae3ab6830b223213cecb8ed3f?s=96&d=mm&r=g",
          "url": "https://secure.gravatar.com/avatar/ace3d71ae3ab6830b223213cecb8ed3f?s=96&d=mm&r=g",
          "caption": "wpx_",
          "inLanguage": "en-GB"
        },
        "sameAs": ["https://quantumaitrading.org/"]
      },
      {
        "@type": "Article",
        "headline": "Quantum AI - Your Trusted Trading Partner",
        "datePublished": "2023-04-24T01:23:07+00:00",
        "dateModified": "2024-10-01T15:20:37+00:00",
        "author": {
          "@id": "https://quantumaitrading.org/author/wpx_/",
          "name": "wpx_"
        },
        "publisher": {
          "@id": "https://quantumaitrading.org/#person"
        },
        "description": "Discover the capabilities of Quantum AI. Enhance your trading techniques with our advanced algorithmic bot, designed to deliver exceptional performance and boost your earning potential.",
        "name": "Quantum AI - Your Trusted Trading Partner",
        "@id": "https://quantumaitrading.org/#richSnippet",
        "isPartOf": {
          "@id": "https://quantumaitrading.org/#webpage"
        },
        "inLanguage": "en-GB",
        "mainEntityOfPage": {
          "@id": "https://quantumaitrading.org/#webpage"
        }
      }
    ]
  }
];

export const metadata: Metadata = {
  title: "Quantum AI Platform - Advanced Trading Solutions",
  description: "Experience the future of trading with our advanced AI-powered platform. Access real-time market data, advanced analytics, and automated trading strategies.",
  metadataBase: new URL('https://quantumaitrading.org'),
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr',
      'it': '/it',
      'pt': '/pt',
      'zh': '/zh',
      'nl': '/nl',
      'pl': '/pl',
      'ar': '/ar',
    }
  },
  openGraph: {
    title: 'Quantum AI - Your Trusted Trading Partner',
    description: 'Discover the capabilities of Quantum AI. Enhance your trading techniques with our advanced algorithmic bot, designed to deliver exceptional performance and boost your earning potential.',
    url: '/',
    siteName: 'quantumaitrading.org',
    locale: 'en_US',
    type: 'article',
    authors: ['wpx_'],
    publishedTime: '2023-04-24T01:23:07+00:00',
    modifiedTime: '2024-10-01T15:20:37+00:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum AI - Your Trusted Trading Partner',
    description: 'Discover the capabilities of Quantum AI. Enhance your trading techniques with our advanced algorithmic bot, designed to deliver exceptional performance and boost your earning potential.',
    creator: '@wpx_',
  },
  other: {
    'twitter:label1': 'Written by',
    'twitter:data1': 'wpx_',
    'twitter:label2': 'Time to read',
    'twitter:data2': 'Less than a minute',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
