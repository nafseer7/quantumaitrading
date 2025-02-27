export const locales = ['en', 'es', 'fr', 'it', 'pt', 'zh', 'nl', 'pl'] as const;
export const defaultLocale = 'en' as const;

export type Locale = typeof locales[number]; 