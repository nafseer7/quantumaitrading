'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';

const footerLinkKeys = {
  product: [
    { key: 'features', href: '/features' },
    { key: 'markets', href: '/markets' },
    // { key: 'pricing', href: '/pricing' },
    { key: 'demo', href: '/auth/signup' },
    { key: 'elon-musk', href: '/elon-musk' }
  ],
  // company: [
  //   { key: 'about', href: '/about-us' },
  //   { key: 'careers', href: '/careers' },
  //   { key: 'press', href: '/press' },
  //   { key: 'news', href: '/news' }
  // ],
  // support: [
  //   { key: 'help', href: '/help-center' },
  //   { key: 'contact', href: '/contact' },
  //   { key: 'community', href: '/community' },
  //   { key: 'status', href: '/system-status' }
  // ],
  legal: [
    { key: 'privacy', href: '/privacy' },
    { key: 'terms', href: '/terms' },
    // { key: 'cookies', href: '/cookies' },
    // { key: 'licenses', href: '/licenses' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/quantumai' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/quantumai' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/quantumai' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/quantumai' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/c/quantumai' },
];

const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Quantum<span className="text-blue-400">AI</span>
              </span>
            </Link>
            <div className="text-gray-400 mb-8 space-y-4 text-sm leading-relaxed">
              <p className="font-medium text-yellow-500">{t('disclaimer.warning')}</p>
              <p>{t('disclaimer.risk')}</p>
              <p>{t('disclaimer.marketing')}</p>
              <p>{t('disclaimer.terms')}</p>
              <p>{t('disclaimer.regulations')}</p>
              <p>{t('disclaimer.consent')}</p>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinkKeys).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold uppercase mb-6">
                {t(`categories.${category}`)}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {t(`links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Quantum<span className="text-blue-400">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md">
              {t('description')}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/10 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              {t('copyright', { year: currentYear })}
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {t('bottomLinks.terms')}
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {t('bottomLinks.privacy')}
              </Link>
              {/* <Link
                href="/cookies"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {t('bottomLinks.cookies')}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 