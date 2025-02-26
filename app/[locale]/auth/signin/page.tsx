'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LineChart, BarChart2, Wallet, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SignInPage() {
  const t = useTranslations('auth.signin');

  const features = [
    { key: 'markets', icon: <LineChart className="w-8 h-8" /> },
    { key: 'analysis', icon: <BarChart2 className="w-8 h-8" /> },
    { key: 'portfolio', icon: <Wallet className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Sign In Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                {t('form.title')}
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.email.label')}
                  </label>
                  <input
                    type="email"
                    placeholder={t('form.email.placeholder')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2
                             focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.password.label')}
                  </label>
                  <input
                    type="password"
                    placeholder={t('form.password.placeholder')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2
                             focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500
                               focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0"
                    />
                    <span className="ml-2 text-sm text-gray-300">
                      {t('form.rememberMe')}
                    </span>
                  </label>

                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    {t('form.forgotPassword')}
                  </Link>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600
                             text-white rounded-xl text-lg font-semibold hover:from-blue-600
                             hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]
                             shadow-lg hover:shadow-blue-500/25"
                  >
                    {t('form.submit')}
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 text-gray-400 bg-[#0A1628]">or</span>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full px-8 py-4 bg-white/5 border border-white/10 text-white
                             rounded-xl text-lg font-semibold hover:bg-white/10 transition-all
                             duration-300 transform hover:scale-[1.02]"
                  >
                    {t('form.demo')}
                  </button>
                </div>

                <div className="border-t border-white/10 pt-6 text-center">
                  <p className="text-gray-400">
                    {t('form.signupPrompt')}{' '}
                    <Link
                      href="/auth/signup"
                      className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                    >
                      {t('form.signupLink')}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Features Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {t('features.title')}
              </h2>

              {features.map((feature) => (
                <motion.div
                  key={feature.key}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10
                           transform transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t(`features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-gray-300">
                        {t(`features.items.${feature.key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 