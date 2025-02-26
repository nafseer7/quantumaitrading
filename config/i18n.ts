export const locales = ['en', 'es', 'de', 'fr', 'it', 'pt'] as const;
export const defaultLocale = 'en' as const;

export type Locale = typeof locales[number]; 