'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const advantageKeys = [
  {
    id: 1,
    icon: '/icons/user-interface.svg',
    key: 'interface'
  },
  {
    id: 2,
    icon: '/icons/automated-trading.svg',
    key: 'automated'
  },
  {
    id: 3,
    icon: '/icons/secure-trading.svg',
    key: 'secure'
  },
  {
    id: 4,
    icon: '/icons/expert-strategies.svg',
    key: 'expert'
  },
  {
    id: 5,
    icon: '/icons/demo-mode.svg',
    key: 'demo'
  },
  {
    id: 6,
    icon: '/icons/security.svg',
    key: 'security'
  }
];

const Advantages = () => {
  const t = useTranslations('advantages');
  const itemsT = useTranslations('advantages.items');

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0A1628] to-[#0d1f35] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-base sm:text-lg lg:text-xl font-medium text-blue-400 tracking-wider block">
            {t('title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
            {t('subtitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {advantageKeys.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={advantage.icon}
                    alt={itemsT(`${advantage.key}.title`)}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {itemsT(`${advantage.key}.title`)}
                </h3>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {itemsT(`${advantage.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages; 