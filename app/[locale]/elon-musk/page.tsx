'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Bot as Robot, Shield, Headset as HeadsetIcon, ChevronRight, Cpu, Brain, Lock, AlertTriangle } from 'lucide-react';
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

export default function ElonMuskPage() {
  const t = useTranslations('auth.signup');

  const countryOptions = [
    { code: '+93', flag: '🇦🇫', name: 'Afghanistan' },
    { code: '+355', flag: '🇦🇱', name: 'Albania' },
    { code: '+213', flag: '🇩🇿', name: 'Algeria' },
    { code: '+376', flag: '🇦🇩', name: 'Andorra' },
    { code: '+244', flag: '🇦🇴', name: 'Angola' },
    { code: '+54', flag: '🇦🇷', name: 'Argentina' },
    { code: '+374', flag: '🇦🇲', name: 'Armenia' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: '+43', flag: '🇦🇹', name: 'Austria' },
    { code: '+994', flag: '🇦🇿', name: 'Azerbaijan' },
    { code: '+973', flag: '🇧🇭', name: 'Bahrain' },
    { code: '+880', flag: '🇧🇩', name: 'Bangladesh' },
    { code: '+375', flag: '🇧🇾', name: 'Belarus' },
    { code: '+32', flag: '🇧🇪', name: 'Belgium' },
    { code: '+501', flag: '🇧🇿', name: 'Belize' },
    { code: '+229', flag: '🇧🇯', name: 'Benin' },
    { code: '+975', flag: '🇧🇹', name: 'Bhutan' },
    { code: '+591', flag: '🇧🇴', name: 'Bolivia' },
    { code: '+387', flag: '🇧🇦', name: 'Bosnia' },
    { code: '+267', flag: '🇧🇼', name: 'Botswana' },
    { code: '+55', flag: '🇧🇷', name: 'Brazil' },
    { code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
    { code: '+226', flag: '🇧🇫', name: 'Burkina Faso' },
    { code: '+855', flag: '🇰🇭', name: 'Cambodia' },
    { code: '+237', flag: '🇨🇲', name: 'Cameroon' },
    { code: '+1', flag: '🇨🇦', name: 'Canada' },
    { code: '+236', flag: '🇨🇫', name: 'Central African Republic' },
    { code: '+56', flag: '🇨🇱', name: 'Chile' },
    { code: '+86', flag: '🇨🇳', name: 'China' },
    { code: '+57', flag: '🇨🇴', name: 'Colombia' },
    { code: '+506', flag: '🇨🇷', name: 'Costa Rica' },
    { code: '+385', flag: '🇭🇷', name: 'Croatia' },
    { code: '+53', flag: '🇨🇺', name: 'Cuba' },
    { code: '+357', flag: '🇨🇾', name: 'Cyprus' },
    { code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
    { code: '+45', flag: '🇩🇰', name: 'Denmark' },
    { code: '+20', flag: '🇪🇬', name: 'Egypt' },
    { code: '+372', flag: '🇪🇪', name: 'Estonia' },
    { code: '+251', flag: '🇪🇹', name: 'Ethiopia' },
    { code: '+679', flag: '🇫🇯', name: 'Fiji' },
    { code: '+358', flag: '🇫🇮', name: 'Finland' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+995', flag: '🇬🇪', name: 'Georgia' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: '+233', flag: '🇬🇭', name: 'Ghana' },
    { code: '+30', flag: '🇬🇷', name: 'Greece' },
    { code: '+299', flag: '🇬🇱', name: 'Greenland' },
    { code: '+502', flag: '🇬🇹', name: 'Guatemala' },
    { code: '+852', flag: '🇭🇰', name: 'Hong Kong' },
    { code: '+36', flag: '🇭🇺', name: 'Hungary' },
    { code: '+354', flag: '🇮🇸', name: 'Iceland' },
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+62', flag: '🇮🇩', name: 'Indonesia' },
    { code: '+98', flag: '🇮🇷', name: 'Iran' },
    { code: '+964', flag: '🇮🇶', name: 'Iraq' },
    { code: '+353', flag: '🇮🇪', name: 'Ireland' },
    { code: '+972', flag: '🇮🇱', name: 'Israel' },
    { code: '+39', flag: '🇮🇹', name: 'Italy' },
    { code: '+81', flag: '🇯🇵', name: 'Japan' },
    { code: '+962', flag: '🇯🇴', name: 'Jordan' },
    { code: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
    { code: '+254', flag: '🇰🇪', name: 'Kenya' },
    { code: '+82', flag: '🇰🇷', name: 'South Korea' },
    { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
    { code: '+856', flag: '🇱🇦', name: 'Laos' },
    { code: '+371', flag: '🇱🇻', name: 'Latvia' },
    { code: '+961', flag: '🇱🇧', name: 'Lebanon' },
    { code: '+218', flag: '🇱🇾', name: 'Libya' },
    { code: '+423', flag: '🇱🇮', name: 'Liechtenstein' },
    { code: '+370', flag: '🇱🇹', name: 'Lithuania' },
    { code: '+352', flag: '🇱🇺', name: 'Luxembourg' },
    { code: '+853', flag: '🇲🇴', name: 'Macau' },
    { code: '+389', flag: '🇲🇰', name: 'Macedonia' },
    { code: '+261', flag: '🇲🇬', name: 'Madagascar' },
    { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
    { code: '+356', flag: '🇲🇹', name: 'Malta' },
    { code: '+52', flag: '🇲🇽', name: 'Mexico' },
    { code: '+373', flag: '🇲🇩', name: 'Moldova' },
    { code: '+377', flag: '🇲🇨', name: 'Monaco' },
    { code: '+976', flag: '🇲🇳', name: 'Mongolia' },
    { code: '+212', flag: '🇲🇦', name: 'Morocco' },
    { code: '+95', flag: '🇲🇲', name: 'Myanmar' },
    { code: '+977', flag: '🇳🇵', name: 'Nepal' },
    { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
    { code: '+64', flag: '🇳🇿', name: 'New Zealand' },
    { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
    { code: '+47', flag: '🇳🇴', name: 'Norway' },
    { code: '+968', flag: '🇴🇲', name: 'Oman' },
    { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
    { code: '+970', flag: '🇵🇸', name: 'Palestine' },
    { code: '+507', flag: '🇵🇦', name: 'Panama' },
    { code: '+595', flag: '🇵🇾', name: 'Paraguay' },
    { code: '+51', flag: '🇵🇪', name: 'Peru' },
    { code: '+63', flag: '🇵🇭', name: 'Philippines' },
    { code: '+48', flag: '🇵🇱', name: 'Poland' },
    { code: '+351', flag: '🇵🇹', name: 'Portugal' },
    { code: '+974', flag: '🇶🇦', name: 'Qatar' },
    { code: '+40', flag: '🇷🇴', name: 'Romania' },
    { code: '+7', flag: '🇷🇺', name: 'Russia' },
    { code: '+250', flag: '🇷🇼', name: 'Rwanda' },
    { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: '+381', flag: '🇷🇸', name: 'Serbia' },
    { code: '+65', flag: '🇸🇬', name: 'Singapore' },
    { code: '+421', flag: '🇸🇰', name: 'Slovakia' },
    { code: '+386', flag: '🇸🇮', name: 'Slovenia' },
    { code: '+27', flag: '🇿🇦', name: 'South Africa' },
    { code: '+34', flag: '🇪🇸', name: 'Spain' },
    { code: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
    { code: '+46', flag: '🇸🇪', name: 'Sweden' },
    { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
    { code: '+886', flag: '🇹🇼', name: 'Taiwan' },
    { code: '+255', flag: '🇹🇿', name: 'Tanzania' },
    { code: '+66', flag: '🇹🇭', name: 'Thailand' },
    { code: '+216', flag: '🇹🇳', name: 'Tunisia' },
    { code: '+90', flag: '🇹🇷', name: 'Turkey' },
    { code: '+256', flag: '🇺🇬', name: 'Uganda' },
    { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
    { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+598', flag: '🇺🇾', name: 'Uruguay' },
    { code: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
    { code: '+58', flag: '🇻🇪', name: 'Venezuela' },
    { code: '+84', flag: '🇻🇳', name: 'Vietnam' },
    { code: '+967', flag: '🇾🇪', name: 'Yemen' },
    { code: '+260', flag: '🇿🇲', name: 'Zambia' },
    { code: '+263', flag: '🇿🇼', name: 'Zimbabwe' }
  ];

  const benefits = [
    { key: 'ai', icon: <Robot className="w-8 h-8" /> },
    { key: 'security', icon: <Shield className="w-8 h-8" /> },
    { key: 'support', icon: <HeadsetIcon className="w-8 h-8" /> }
  ];

  const sections = [
    {
      title: "Understanding Quantum AI's Independent Operation",
      content: "Quantum AI operates as an autonomous entity, delivering specialized services for the financial market. Our suite includes advanced trading software, a comprehensive platform, a user-friendly application, and an automated trading system. We integrate cutting-edge quantum computing technology in our trading system, marking a significant leap forward in automated trading capabilities.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Quantum AI Platform Features",
      content: "Our trading software distinguishes itself through its effectiveness and transformative impact on trading dynamics. The platform enables traders to customize their settings, while our AI-driven bot operates within these parameters, revolutionizing traditional trading approaches. We've successfully addressed and overcome various challenges to establish our legitimacy in the market.",
      icon: <Robot className="w-6 h-6" />
    },
    {
      title: "Elon Musk's Actual AI Ventures",
      content: "While Elon Musk has no association with Quantum AI, his genuine interest in artificial intelligence is noteworthy. As the innovator behind Tesla and SpaceX, Musk advocates for responsible AI development, particularly through his work with OpenAI and Tesla's AI initiatives.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Security and Regulation",
      content: "We emphasize the importance of working with regulated brokers to ensure security and trustworthiness in financial trading. This principle guides our operations at Quantum AI, where we maintain strict compliance with regulatory standards.",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      
      <main className="relative pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Hero Section with Sign Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 mb-12">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start mb-20">
            {/* Benefits Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
                {t('benefits.title')}
              </h2>

              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.key}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                           transform transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                        {t(`benefits.items.${benefit.key}.title`)}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        {t(`benefits.items.${benefit.key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Sign Up Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                {t('form.title')}
              </h2>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      {t('form.firstName.label')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('form.firstName.placeholder')}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl
                               text-white placeholder-gray-400 focus:outline-none focus:ring-2
                               focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      {t('form.lastName.label')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('form.lastName.placeholder')}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl
                               text-white placeholder-gray-400 focus:outline-none focus:ring-2
                               focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    {t('form.email.label')}
                  </label>
                  <input
                    type="email"
                    placeholder={t('form.email.placeholder')}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2
                             focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    {t('form.phone.label')}
                  </label>
                  <div className="flex gap-2 sm:gap-3">
                    <select
                      className="w-[120px] sm:w-[140px] px-2 sm:px-3 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl
                               text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20
                               focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base"
                    >
                      {countryOptions.map((country) => (
                        <option key={`${country.code}-${country.name}`} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder={t('form.phone.placeholder')}
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl
                               text-white placeholder-gray-400 focus:outline-none focus:ring-2
                               focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600
                             text-white rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:from-blue-600
                             hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]
                             shadow-lg hover:shadow-blue-500/25 mt-2 sm:mt-0"
                  >
                    {t('form.submit')}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 text-center mt-4 sm:mt-6">
                  {t('form.terms')}{' '}
                  <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                    {t('form.termsLink')}
                  </Link>{' '}
                  {t('form.and')}{' '}
                  <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                    {t('form.privacyLink')}
                  </Link>
                </p>

                <div className="border-t border-white/10 pt-4 sm:pt-6 text-center">
                  <p className="text-sm text-gray-400">
                    {t('form.loginPrompt')}{' '}
                    <Link
                      href="/auth/signin"
                      className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                    >
                      {t('form.loginLink')}
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Disclaimer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Clarifying Quantum AI and Elon Musk
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 sm:p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-red-500">
                    Important Disclaimer
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">
                  We want to be absolutely clear: Elon Musk has no connection to Quantum AI's trading software, Quantum AI Ltd, the Quantum AI app, platform, robot, or any of our services. Any claims suggesting otherwise are incorrect.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-16"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10
                         transform transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                    {section.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-8 sm:p-10 border border-white/10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Start Trading with Quantum AI
              </h2>
              <p className="text-gray-300 mb-8">
                Experience the power of advanced AI-driven trading technology. Create your account today and join thousands of successful traders.
              </p>
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600
                         text-white rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:from-blue-600
                         hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]
                         shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Now
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 