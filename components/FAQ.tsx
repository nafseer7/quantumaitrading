'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How does Quantum AI's trading algorithm work?",
    answer: 'Quantum AI utilizes advanced machine learning algorithms to analyze market trends, historical data, and real-time indicators. Our AI processes millions of data points to identify profitable trading opportunities and execute trades with precision.',
  },
  {
    id: 2,
    question: 'What is the minimum deposit required?',
    answer: 'The minimum deposit to start trading with Quantum AI is $250. This amount allows you to access all our basic features and begin trading with our AI system.',
  },
  {
    id: 3,
    question: 'Is my investment safe with Quantum AI?',
    answer: 'Yes, we prioritize the security of your funds. We employ bank-grade encryption, secure cold storage for digital assets, and regular security audits.',
  },
  {
    id: 4,
    question: 'Can I withdraw my profits at any time?',
    answer: 'Absolutely! You can withdraw your profits at any time through our secure withdrawal system. Most withdrawals are processed within 24-48 hours.',
  },
  {
    id: 5,
    question: 'Do I need trading experience?',
    answer: 'No prior trading experience is required. Our platform is designed to be user-friendly for beginners while offering advanced features for experienced traders.',
  },
  {
    id: 6,
    question: 'What assets can I trade?',
    answer: 'Quantum AI supports trading in major cryptocurrencies (Bitcoin, Ethereum, etc.), forex pairs, commodities, and selected stocks.',
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-[#0d1f35] to-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <span className="text-xl font-medium text-blue-400 tracking-wider">FAQ</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Frequently Asked<br />Questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="text-xl font-bold text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-400" />
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
                    <div className="px-6 pb-6">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {faq.answer}
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