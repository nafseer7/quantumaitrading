'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  LineChart,
  BarChart,
  Clock,
  Globe,
  Zap,
  AlertCircle,
  BookOpen,
  Bot,
  Shield,
  Search,
  Calendar,
  Newspaper
} from 'lucide-react';
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
      staggerChildren: 0.2
    }
  }
};

export default function MarketsPage() {
  const t = useTranslations('markets.page');

  const marketStats = [
    { key: 'volume', icon: <BarChart className="w-6 h-6" /> },
    { key: 'markets', icon: <Globe className="w-6 h-6" /> },
    { key: 'execution', icon: <Zap className="w-6 h-6" /> },
    { key: 'uptime', icon: <Clock className="w-6 h-6" /> }
  ];

  const marketFeatures = [
    { key: 'analysis', icon: <LineChart className="w-8 h-8" /> },
    { key: 'execution', icon: <Zap className="w-8 h-8" /> },
    { key: 'alerts', icon: <AlertCircle className="w-8 h-8" /> },
    { key: 'research', icon: <BookOpen className="w-8 h-8" /> },
    { key: 'automation', icon: <Bot className="w-8 h-8" /> },
    { key: 'risk', icon: <Shield className="w-8 h-8" /> }
  ];

  const tradingTools = [
    { key: 'charts', icon: <LineChart className="w-8 h-8" /> },
    { key: 'scanner', icon: <Search className="w-8 h-8" /> },
    { key: 'news', icon: <Newspaper className="w-8 h-8" /> },
    { key: 'calendar', icon: <Calendar className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
          >
            {marketStats.map((stat) => (
              <motion.div
                key={stat.key}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    {stat.icon}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t(`marketStats.stats.${stat.key}`)}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">
                  {t(`marketStats.values.${stat.key}`)}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Markets */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-4">
                {t('mainMarkets.title')}
              </h2>
              <p className="text-gray-400">
                {t('mainMarkets.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {['stocks', 'crypto', 'forex'].map((market) => (
                <motion.div
                  key={market}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t(`mainMarkets.${market}.title`)}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {t(`mainMarkets.${market}.description`)}
                    </p>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {t(`mainMarkets.${market}.feature${num}`)}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Market Features Grid */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-4">
                {t('marketFeatures.title')}
              </h2>
              <p className="text-gray-400">
                {t('marketFeatures.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {marketFeatures.map((feature) => (
                <motion.div
                  key={feature.key}
                  variants={fadeInUp}
                  className="group h-[200px]"
                >
                  <div className="relative h-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 
                                border border-white/[0.08] transition-all duration-500 transform-gpu 
                                hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] 
                                hover:translate-y-[-4px] hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {t(`marketFeatures.${feature.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {t(`marketFeatures.${feature.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trading Tools */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-4">
                {t('tradingTools.title')}
              </h2>
              <p className="text-gray-400">
                {t('tradingTools.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {tradingTools.map((tool) => (
                <motion.div
                  key={tool.key}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 
                                hover:border-blue-500/30 transition-all duration-300 overflow-hidden
                                hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex items-center gap-6 mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {t(`tradingTools.items.${tool.key}.title`)}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {t(`tradingTools.items.${tool.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-lg font-semibold 
                               hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 
                               shadow-lg hover:shadow-blue-500/25"
              >
                {t('cta.button')}
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl text-lg font-semibold 
                               hover:bg-white/20 transition-all duration-300 transform hover:scale-105 
                               border border-white/20 hover:border-white/30"
              >
                {t('cta.demo')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 