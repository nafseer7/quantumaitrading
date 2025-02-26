'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Star, MapPin, Quote, Users, Globe2, BarChart4, Award } from 'lucide-react';
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
      staggerChildren: 0.2
    }
  }
};

export default function TestimonialsPage() {
  const t = useTranslations('testimonials.page');

  const stats = [
    { key: 'traders', icon: <Users className="w-6 h-6" /> },
    { key: 'countries', icon: <Globe2 className="w-6 h-6" /> },
    { key: 'rating', icon: <Star className="w-6 h-6" /> },
    { key: 'volume', icon: <BarChart4 className="w-6 h-6" /> }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  const getFeaturedRating = (id: string): number => {
    try {
      return parseInt(t(`featured.testimonials.${id}.rating`)) || 5;
    } catch {
      return 5;
    }
  };

  const getReviewRating = (id: string): number => {
    try {
      return parseInt(t(`reviews.items.${id}.rating`)) || 5;
    } catch {
      return 5;
    }
  };

  const getTagCount = (id: string): number => {
    try {
      const count = t(`featured.testimonials.${id}.tagCount`);
      return typeof count === 'string' ? parseInt(count) : 2;
    } catch {
      return 2;
    }
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const Avatar = ({ name, image }: { name: string; image: string }) => {
    const initials = getInitials(name);
    const gradients = [
      'from-blue-500 to-purple-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-pink-500 to-rose-500'
    ];
    const randomGradient = gradients[name.length % gradients.length];

    return (
      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-[1px]">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl rounded-full" />
        {image.startsWith('/') ? (
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${randomGradient} flex items-center justify-center relative z-10`}>
            <span className="text-lg font-bold text-white">{initials}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="rounded-full relative z-10"
          />
        )}
      </div>
    );
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
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.key}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    {stat.icon}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t(`stats.${stat.key}.label`)}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">
                  {t(`stats.${stat.key}.value`)}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Testimonials */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-4">
                {t('featured.title')}
              </h2>
              <p className="text-gray-400">
                {t('featured.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {['1', '2', '3', '4'].map((id) => (
                <motion.div
                  key={id}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start gap-6 mb-6">
                      <Avatar 
                        name={t(`featured.testimonials.${id}.name`)}
                        image={t(`featured.testimonials.${id}.image`)}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {t(`featured.testimonials.${id}.name`)}
                        </h3>
                        <p className="text-gray-400">
                          {t(`featured.testimonials.${id}.role`)}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-400">
                            {t(`featured.testimonials.${id}.location`)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-3 -left-3 w-8 h-8 text-blue-500/20" />
                      <p className="text-gray-300 mb-6">
                        {t(`featured.testimonials.${id}.content`)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {renderStars(getFeaturedRating(id))}
                      </div>
                      <div className="flex gap-2">
                        {Array.from({ length: getTagCount(id) }).map((_, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          >
                            {t(`featured.testimonials.${id}.tag${index + 1}`)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Recent Reviews */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-4">
                {t('reviews.title')}
              </h2>
              <p className="text-gray-400">
                {t('reviews.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {['1', '2', '3', '4', '5', '6'].map((id) => (
                <motion.div
                  key={id}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 
                                hover:border-blue-500/30 transition-all duration-300
                                hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {t(`reviews.items.${id}.name`)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {t(`reviews.items.${id}.date`)}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {renderStars(getReviewRating(id))}
                      </div>
                    </div>
                    <p className="text-gray-300">
                      {t(`reviews.items.${id}.content`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-400" />
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