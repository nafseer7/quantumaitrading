'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

type Props = {
  messages: any;
  locale: string;
  children: React.ReactNode;
  now: Date;
};

export default function TranslationsProvider({
  messages,
  locale,
  children,
  now,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} now={now}>
      {children}
    </NextIntlClientProvider>
  );
} 