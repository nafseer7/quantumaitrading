'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState, useMemo } from 'react';
import { ChevronDown, Search, MessageCircle, HelpCircle, Shield, Wallet } from 'lucide-react';
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

export default function FAQPage() {
  const t = useTranslations('faq.page');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const categories = [
    { key: 'general', icon: <HelpCircle className="w-6 h-6" /> },
    { key: 'trading', icon: <MessageCircle className="w-6 h-6" /> },
    { key: 'security', icon: <Shield className="w-6 h-6" /> },
    { key: 'account', icon: <Wallet className="w-6 h-6" /> }
  ];

  const toggleItem = (categoryKey: string, itemKey: string) => {
    const key = `${categoryKey}-${itemKey}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isItemOpen = (categoryKey: string, itemKey: string) => {
    return openItems[`${categoryKey}-${itemKey}`] || false;
  };

  // Function to check if an item matches the search query
  const itemMatchesSearch = (categoryKey: string, itemKey: string) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    const question = t(`categories.${categoryKey}.items.${itemKey}.question`).toLowerCase();
    const answer = t(`categories.${categoryKey}.items.${itemKey}.answer`).toLowerCase();
    
    return question.includes(query) || answer.includes(query);
  };

  // Filter categories and items based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;

    return categories.map(category => ({
      ...category,
      hasMatches: ['1', '2', '3'].some(itemKey => itemMatchesSearch(category.key, itemKey))
    })).filter(category => category.hasMatches);
  }, [searchQuery]);

  // Auto-expand items that match search
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    
    // If search is cleared, collapse all items
    if (!value) {
      setOpenItems({});
      return;
    }

    // Auto-expand matching items
    const newOpenItems: Record<string, boolean> = {};
    categories.forEach(category => {
      ['1', '2', '3'].forEach(itemKey => {
        if (itemMatchesSearch(category.key, itemKey)) {
          newOpenItems[`${category.key}-${itemKey}`] = true;
        }
      });
    });
    setOpenItems(newOpenItems);
  };

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto mb-20"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search your question..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-8"
          >
            {filteredCategories.map((category) => (
              <motion.div
                key={category.key}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="p-6 flex items-center gap-4 border-b border-white/10">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {t(`categories.${category.key}.title`)}
                  </h2>
                </div>

                <div className="divide-y divide-white/10">
                  {['1', '2', '3'].map((itemKey) => {
                    if (!itemMatchesSearch(category.key, itemKey)) return null;
                    const isOpen = isItemOpen(category.key, itemKey);
                    return (
                      <div key={itemKey} className="relative">
                        <button
                          onClick={() => toggleItem(category.key, itemKey)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                        >
                          <h3 className="text-lg font-semibold text-white pr-8">
                            {t(`categories.${category.key}.items.${itemKey}.question`)}
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-gray-300">
                                {t(`categories.${category.key}.items.${itemKey}.answer`)}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {searchQuery && filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-400">
                No questions found matching "{searchQuery}". Try a different search term or contact our support team.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10"
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