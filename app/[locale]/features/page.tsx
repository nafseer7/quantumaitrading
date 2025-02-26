'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { 
  Shield, 
  LineChart, 
  Bot, 
  Zap, 
  Clock, 
  BarChart3, 
  Lock, 
  Smartphone,
  Globe,
  Award
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

export default function FeaturesPage() {
  const t = useTranslations('features.page');

  const mainFeatures = [
    {
      icon: <Bot className="w-10 h-10 text-white" />,
      title: t('mainFeatures.ai.title'),
      description: t('mainFeatures.ai.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <LineChart className="w-10 h-10 text-white" />,
      title: t('mainFeatures.analysis.title'),
      description: t('mainFeatures.analysis.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: t('mainFeatures.security.title'),
      description: t('mainFeatures.security.description'),
      color: 'from-green-500 to-green-600'
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: t('additionalFeatures.realtime.title'),
      description: t('additionalFeatures.realtime.description'),
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: t('additionalFeatures.portfolio.title'),
      description: t('additionalFeatures.portfolio.description'),
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: t('additionalFeatures.security.title'),
      description: t('additionalFeatures.security.description'),
      color: 'from-green-500/20 to-blue-500/20'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      title: t('additionalFeatures.mobile.title'),
      description: t('additionalFeatures.mobile.description'),
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: t('additionalFeatures.global.title'),
      description: t('additionalFeatures.global.description'),
      color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
      icon: <Award className="w-8 h-8 text-pink-400" />,
      title: t('additionalFeatures.support.title'),
      description: t('additionalFeatures.support.description'),
      color: 'from-pink-500/20 to-purple-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero Section */}
      <Header />
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

          {/* Main Features */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group h-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors flex flex-col items-center text-center">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 flex-grow">
                    {feature.description}
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mt-6" />
                  <button className="mt-6 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                    Learn More
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        

          {/* Additional Features Grid */}
          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-center mb-4"
            >
              {t('additionalFeatures.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
            >
              {t('additionalFeatures.subtitle')}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group h-[280px] perspective-1000"
                >
                  <div 
                    className="relative h-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 
                              border border-white/[0.08] transition-all duration-500 transform-gpu 
                              hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] 
                              hover:translate-y-[-4px] hover:scale-[1.02]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                          {feature.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-sm text-gray-500">Live Feature</span>
                        </div>
                        <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                          Learn More
                          <Zap className="w-4 h-4" />
                        </button>
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
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              {t('cta.button')}
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 