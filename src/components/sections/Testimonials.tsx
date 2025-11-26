'use client';

import Image from 'next/image';
import { HiStar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { TemplateData } from '@/types/template';

type TestimonialsProps = {
  testimonials: TemplateData['testimonials'];
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.items.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
            >
              {/* Photo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                className="w-28 h-28 relative rounded-full mx-auto overflow-hidden shadow-lg mb-5"
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
                {t.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center my-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <HiStar className="text-yellow-400 w-6 h-6" />
                  </motion.span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                “{t.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
