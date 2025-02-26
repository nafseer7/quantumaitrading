"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Lock, LineChart, Zap } from 'lucide-react';

const Features = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A1628]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-base sm:text-lg lg:text-xl font-medium text-blue-400 mb-3 sm:mb-4 tracking-wider">
            EASY TO GET STARTED
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.2]">
            Reliable. Straightforward.<br className="hidden sm:block" /> Quick.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400">1</span>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Join</h4>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Just enter your details to set up your account. Our streamlined process ensures you're ready to trade in minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400">2</span>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Connect</h4>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Connect with our trading platform and harness the strength of Quantum AI. Access powerful tools and insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 sm:mb-8">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400">3</span>
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Start Trading</h4>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Embark on making intelligent and lucrative live trades, leveraging our advanced AI to boost your trading prowess.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-12 lg:mt-16 flex items-center justify-center gap-2 sm:gap-3 text-gray-400 bg-white/5 backdrop-blur-sm rounded-full px-5 sm:px-6 lg:px-8 py-3 sm:py-4 w-fit mx-auto border border-white/5 hover:border-blue-500/30 transition-colors"
        >
          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          <span className="text-sm sm:text-base lg:text-lg">High-level encryption safeguards your data at all times.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 