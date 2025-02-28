import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es', 'fr', 'it', 'pt', 'zh', 'nl', 'pl', 'ar'] as const;
export const localePrefix = 'always'; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix }); 