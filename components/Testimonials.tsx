'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Quantum AI has revolutionized my trading strategy. The AI-powered insights have helped me make more informed decisions, and the results speak for themselves. The platform's ease of use combined with its sophisticated technology is truly remarkable.",
    author: "Sarah Chen",
    position: "Professional Trader",
    featured: true
  },
  {
    id: 2,
    content: "I've been using various trading platforms for years, but none come close to Quantum AI's capabilities. The real-time analytics and predictive modeling have given me a significant edge in the market.",
    author: "Michael Rodriguez",
    position: "Investment Analyst"
  },
  {
    id: 3,
    content: "The customer support team is exceptional. They're always available to help and truly understand the technical aspects of trading. This platform has exceeded all my expectations.",
    author: "Emma Thompson",
    position: "Hedge Fund Manager"
  }
];

const Testimonials = () => {
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
          <span className="text-xl font-medium text-blue-400 tracking-wider">TESTIMONIALS</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Trusted by Traders<br />Worldwide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 ${
                testimonial.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-xl text-gray-300 leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-lg text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 