'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Linkedin, Twitter, Github, Dribbble, Link2, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMemberAvatar from '@/app/components/TeamMemberAvatar';


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

// Function to get the image path for a team member
const getTeamMemberImage = (name: string) => {
  const imageName = name.toLowerCase().replace(/\s+/g, '-');
  return `/images/team/${imageName}.jpg`;
};

// Social media icon mapping
const SocialIcon = ({ type }: { type: string }) => {
  const icons = {
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    github: <Github className="w-5 h-5" />,
    dribbble: <Dribbble className="w-5 h-5" />,
    behance: <Link2 className="w-5 h-5" />,
    medium: <BookOpen className="w-5 h-5" />
  };
  return icons[type as keyof typeof icons] || null;
};

export default function TeamPage() {
  const t = useTranslations('team.page');

  const departments = ['leadership', 'engineering', 'product', 'marketing'];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl" />
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

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
          >
            {['employees', 'countries', 'remote', 'culture'].map((stat) => (
              <div
                key={stat}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t(`stats.${stat}`)}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Team Sections */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-32"
          >
            {departments.map((department) => (
              <motion.section
                key={department}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t(`departments.${department}.title`)}
                  </h2>
                  <p className="text-xl text-gray-300">
                    {t(`departments.${department}.description`)}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {['1', '2', '3'].map((memberId) => (
                    <motion.div
                      key={memberId}
                      variants={fadeInUp}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden 
                               transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                    >
                      <TeamMemberAvatar
                        name={t(`departments.${department}.members.${memberId}.name`)}
                        imageUrl={getTeamMemberImage(t(`departments.${department}.members.${memberId}.name`))}
                      />
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {t(`departments.${department}.members.${memberId}.name`)}
                        </h3>
                        <p className="text-blue-400 font-medium mb-3">
                          {t(`departments.${department}.members.${memberId}.role`)}
                        </p>
                        <p className="text-gray-300 mb-4">
                          {t(`departments.${department}.members.${memberId}.bio`)}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{t(`departments.${department}.members.${memberId}.location`)}</span>
                          </div>
                          
                          <div className="flex gap-3">
                            {[1, 2].map((linkNum) => {
                              try {
                                const type = t(`departments.${department}.members.${memberId}.links.link${linkNum}.type`);
                                const url = t(`departments.${department}.members.${memberId}.links.link${linkNum}.url`);
                                return (
                                  <a
                                    key={`${type}-${linkNum}`}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                  >
                                    <SocialIcon type={type} />
                                  </a>
                                );
                              } catch {
                                return null;
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-32 bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('joinUs.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('joinUs.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-lg font-semibold 
                               hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 
                               shadow-lg hover:shadow-blue-500/25"
              >
                {t('joinUs.button')}
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl text-lg font-semibold 
                               hover:bg-white/20 transition-all duration-300 transform hover:scale-105 
                               border border-white/20 hover:border-white/30"
              >
                {t('joinUs.culture')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 