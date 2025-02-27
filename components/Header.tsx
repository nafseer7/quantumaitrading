'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Markets', href: '/markets' },
  { name: 'Teams', href: '/team' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'FAQ', href: '/faq' },
];

const languages = [
  { code: 'en', name: 'English', href: '/en' },
  { code: 'es', name: 'Español', href: '/es' },
  { code: 'fr', name: 'Français', href: '/fr' },
  { code: 'it', name: 'Italiano', href: '/it' },
  { code: 'pt', name: 'Português', href: '/pt' },
  { code: 'zh', name: 'Chinese', href: '/zh' },
  { code: 'nl', name: 'Dutch', href: '/nl' },
  { code: 'pl', name: 'Polish', href: '/pl' },
  { code: 'ar', name: 'Arabic', href: '/ar' },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get the current path without the locale to maintain the same page when switching languages
  const getPathWithoutLocale = () => {
    if (!pathname) return '/';
    const parts = pathname.split('/');
    return parts.length > 2 ? `/${parts.slice(2).join('/')}` : '/';
  };

  // Function to get the full path for a language
  const getLanguagePath = (langCode: string) => {
    const pathWithoutLocale = getPathWithoutLocale();
    return `/${langCode}${pathWithoutLocale}`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-[#0A1628]/80 backdrop-blur-xl border-b border-white/10' : 'py-6'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className="text-3xl font-bold text-white">Quantum<span className="text-blue-400">AI</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons and Language Selector */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-lg">{selectedLang.code.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0A1628] border border-white/10 shadow-lg overflow-hidden"
                  >
                    <div className="py-2">
                      {languages.map((lang) => (
                        <Link
                          key={lang.code}
                          href={getLanguagePath(lang.code)}
                          onClick={() => {
                            setSelectedLang(lang);
                            setIsLangMenuOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                        >
                          {lang.name}
                          {selectedLang.code === lang.code && (
                            <motion.div
                              layoutId="selectedIndicator"
                              className="w-2 h-2 rounded-full bg-blue-400"
                            />
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/auth/signup"
              className="px-8 py-3 text-lg text-white hover:text-blue-400 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="px-8 py-3 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-10 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-0 pt-24 pb-8 bg-[#0A1628] border-b border-white/10 md:hidden"
            >
              <div className="flex flex-col gap-4 px-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Language Selector */}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-lg text-gray-400 mb-3">Select Language</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={getLanguagePath(lang.code)}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`px-4 py-3 text-lg rounded-lg transition-colors ${
                          selectedLang.code === lang.code
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  <Link
                    href="/auth/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3 text-center text-xl text-white hover:text-blue-400 transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3 text-center text-xl text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 