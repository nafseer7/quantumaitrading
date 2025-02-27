'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

const faqCategories = [
  { id: 'general', items: ['1', '2', '3'] },
  { id: 'trading', items: ['1', '2', '3'] },
  { id: 'security', items: ['1', '2', '3'] },
  { id: 'account', items: ['1', '2', '3'] }
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  
  const t = useTranslations('faq');
  const pageT = useTranslations('faq.page');
  const categoriesT = useTranslations('faq.page.categories');

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0d1f35] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-lg sm:text-xl font-medium text-blue-400 tracking-wider block">
            {t('title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
            {pageT('hero.title')}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            {pageT('hero.description')}
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {faqCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                className="w-full p-6 sm:p-8 flex items-center justify-between text-left border-b border-white/10"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {categoriesT(`${category.id}.title`)}
                </h3>
                <motion.div
                  animate={{ rotate: openCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                </motion.div>
              </button>

              {/* Questions in Category */}
              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 space-y-4">
                      {category.items.map((itemId) => (
                        <div key={itemId} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                          <button
                            onClick={() => setOpenQuestion(openQuestion === `${category.id}-${itemId}` ? null : `${category.id}-${itemId}`)}
                            className="w-full flex items-center justify-between text-left"
                          >
                            <span className="text-base sm:text-lg font-semibold text-white pr-6">
                              {categoriesT(`${category.id}.items.${itemId}.question`)}
                            </span>
                            <motion.div
                              animate={{ rotate: openQuestion === `${category.id}-${itemId}` ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown className="w-5 h-5 text-blue-400" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {openQuestion === `${category.id}-${itemId}` && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-4"
                              >
                                <p className="text-gray-300 leading-relaxed">
                                  {categoriesT(`${category.id}.items.${itemId}.answer`)}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {pageT('cta.title')}
          </h3>
          <p className="text-gray-300 text-lg">
            {pageT('cta.description')}
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              {pageT('cta.button')}
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              {pageT('cta.demo')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 