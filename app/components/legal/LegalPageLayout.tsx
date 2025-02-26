'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-gray-400 mb-12">
              Last updated: {lastUpdated}
            </p>

            <div className="max-w-none">
              <div className="text-white bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 