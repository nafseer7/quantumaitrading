"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  const [phoneCode, setPhoneCode] = useState('+971');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="relative min-h-screen bg-[#0A1628] overflow-hidden flex items-center py-20 lg:py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[1400px] h-[1400px] rotate-12 opacity-50 lg:opacity-100">
          <Image
            src="/wave-pattern.png"
            alt="Background Pattern"
            fill
            className="object-contain animate-pulse"
            priority
          />
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-8 lg:space-y-12 lg:sticky lg:top-10"
          >
            <motion.div {...fadeInUp} className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white leading-tight">
                Quantum AI - Next Era of AI-Driven Trading
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Step into the future of trading with Quantum AI—your gateway to smarter, faster, and more precise market decisions. Harness cutting-edge AI technology to optimize your trades, minimize risks, and maximize potential profits like never before.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-4">
              <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-lg lg:text-xl text-white ml-2 lg:ml-3 font-medium">Rated 4.8 stars by over 9,150 users</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <div className="border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm bg-white/5">
                <h3 className="text-gray-300 uppercase text-sm font-medium tracking-wider mb-6 lg:mb-8">Trusted by Industry Leaders</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                  <div className="aspect-[3/1] relative">
                    <Image 
                      src="/partner1.svg" 
                      alt="Partner" 
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="aspect-[3/1] relative">
                    <Image 
                      src="/partner2.svg" 
                      alt="Partner" 
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="aspect-[3/1] relative">
                    <Image 
                      src="/partner3.svg" 
                      alt="Partner" 
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="aspect-[3/1] relative">
                    <Image 
                      src="/partner1.svg" 
                      alt="Partner" 
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            {...scaleIn}
            className="relative h-full flex items-center"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/10 w-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-10">Start Trading Now</h2>
              <form className="space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 lg:px-6 py-4 lg:py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-base lg:text-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 lg:px-6 py-4 lg:py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-base lg:text-lg"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 lg:px-6 py-4 lg:py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-base lg:text-lg"
                  />
                </div>
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 lg:gap-6">
                  <select
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    className="px-3 sm:px-6 py-4 lg:py-5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors text-base lg:text-lg"
                  >
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 lg:px-6 py-4 lg:py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-base lg:text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 lg:py-6 px-6 lg:px-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg lg:text-xl font-medium hover:from-blue-500 hover:to-blue-300 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0A1628] mt-4"
                >
                  Create Your Free Account
                </button>
              </form>
              <p className="text-xs sm:text-sm text-gray-400 mt-6 lg:mt-10 text-center">
                By signing up, you agree to our{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Use</a> and{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 