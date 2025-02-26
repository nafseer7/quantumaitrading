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
    <section className="py-32 bg-[#0A1628]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-xl font-medium text-blue-400 mb-4 tracking-wider">EASY TO GET STARTED</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Reliable. Straightforward.<br />Quick.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
              <span className="text-3xl font-bold text-blue-400">1</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Join</h4>
            <p className="text-xl text-gray-300 leading-relaxed">
              Just enter your details to set up your account. Our streamlined process ensures you're ready to trade in minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
              <span className="text-3xl font-bold text-blue-400">2</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Connect</h4>
            <p className="text-xl text-gray-300 leading-relaxed">
              Connect with our trading platform and harness the strength of Quantum AI. Access powerful tools and insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
              <span className="text-3xl font-bold text-blue-400">3</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">Start Trading</h4>
            <p className="text-xl text-gray-300 leading-relaxed">
              Embark on making intelligent and lucrative live trades, leveraging our advanced AI to boost your trading prowess.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-3 text-gray-400 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 w-fit mx-auto border border-white/5 hover:border-blue-500/30 transition-colors"
        >
          <Lock className="w-5 h-5 text-blue-400" />
          <span className="text-lg">High-level encryption safeguards your data at all times.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 