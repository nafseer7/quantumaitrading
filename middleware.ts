import createMiddleware from 'next-intl/middleware';

// This is the list of languages you want to support
export default createMiddleware({
  locales: ['en', 'es', 'fr', 'it', 'pt', 'zh', 'nl'],
  defaultLocale: 'en'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 