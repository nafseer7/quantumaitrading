import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/config/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Quantum AI - Advanced Trading Platform',
    description: 'Experience the future of trading with our AI-powered platform.',
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Handle the locale parameter with proper type checking
  const locale = params.locale as typeof locales[number];
  
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <TranslationsProvider messages={messages} locale={locale} now={new Date()}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
} 