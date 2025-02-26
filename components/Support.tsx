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
    <section className="py-32 bg-gradient-to-b from-[#0A1628] to-[#0d1f35]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-xl font-medium text-blue-400 tracking-wider">ALWAYS AT YOUR SERVICE</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Round-the-Clock<br />Expert Assistance
              </h2>
            </div>
            
            <div className="space-y-10 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Available with Every Plan and Service
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We are committed to providing all our subscribers, irrespective of their chosen plan, with uninterrupted access to our support team — available 24/7, every day of the year.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Exceptional Satisfaction Levels
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    With a 97% customer satisfaction rate, we're always here for you, striving to achieve excellence and aiming to reach as close to 100% satisfaction as we can.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Multilingual Support
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
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
            className="relative"
          >
            <div className="relative h-[700px] rounded-3xl overflow-hidden">
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