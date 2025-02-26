'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, CheckCircle, Globe } from 'lucide-react';

const Support = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0A1628] to-[#0d1f35]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 lg:space-y-10"
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="text-lg sm:text-xl font-medium text-blue-400 tracking-wider block">ALWAYS AT YOUR SERVICE</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Round-the-Clock<br className="hidden sm:block" /> Expert Assistance
              </h2>
            </div>
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 mt-6 sm:mt-8 lg:mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                    Available with Every Plan and Service
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    We are committed to providing all our subscribers, irrespective of their chosen plan, with uninterrupted access to our support team — available 24/7, every day of the year.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                    Exceptional Satisfaction Levels
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    With a 97% customer satisfaction rate, we're always here for you, striving to achieve excellence and aiming to reach as close to 100% satisfaction as we can.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                    Multilingual Support
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    Quantum AI is adaptable to your language preferences, offering support in English, Spanish, French, Dutch, and Italian. Feel free to switch languages anytime to suit your comfort.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mt-8 sm:mt-0"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/support-team.svg"
                alt="Support Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support; 