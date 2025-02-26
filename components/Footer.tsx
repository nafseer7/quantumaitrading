'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Markets', href: '#markets' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo Account', href: '#demo' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'News', href: '#news' },
  ],
  support: [
    { name: 'Help Center', href: '#help' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Community', href: '#community' },
    { name: 'Status', href: '#status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Licenses', href: '/licenses' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Quantum<span className="text-blue-400">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md">
              Experience the future of trading with our advanced AI-powered platform. Join thousands of successful traders worldwide.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/10 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold uppercase mb-6">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} QuantumAI. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="#terms"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#cookies"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 