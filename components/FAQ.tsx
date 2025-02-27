'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

const faqKeys = [
  { id: 1, key: '1' },
  { id: 2, key: '2' },
  { id: 3, key: '3' },
  { id: 4, key: '4' },
  { id: 5, key: '5' },
  { id: 6, key: '6' }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq');
  const questionsT = useTranslations('faq.page.questions');

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0d1f35] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-lg sm:text-xl font-medium text-blue-400 tracking-wider block">{t('tagline')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
            {t('title')}<br className="hidden sm:block" /> {t('subtitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {faqKeys.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 sm:p-5 lg:p-6 flex items-center justify-between text-left"
              >
                <span className="text-base sm:text-lg lg:text-xl font-bold text-white pr-6 sm:pr-8">
                  {questionsT(`${faq.key}.question`)}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
                      <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                        {questionsT(`${faq.key}.answer`)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 