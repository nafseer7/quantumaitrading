import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: "Quantum AI ™️ - Official Website for Quantum Trading [UPDATED 2025]",
  description: "Quantum AI ™️ is the official website for AI-powered quantum trading. Experience cutting-edge technology for smarter, faster, and more secure trading in 2025. [UPDATED]",
  openGraph: {
    title: "Quantum AI ™️ - Official Website for Quantum Trading [UPDATED 2025]",
    description: "Quantum AI ™️ is the official website for AI-powered quantum trading. Experience cutting-edge technology for smarter, faster, and more secure trading in 2025. [UPDATED]",
    type: "website",
    locale: "en_US",
    siteName: "Quantum AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum AI ™️ - Official Website for Quantum Trading [UPDATED 2025]",
    description: "Quantum AI ™️ is the official website for AI-powered quantum trading. Experience cutting-edge technology for smarter, faster, and more secure trading in 2025. [UPDATED]",
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
} 