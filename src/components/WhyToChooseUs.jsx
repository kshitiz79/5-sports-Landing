'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Trusted by Elite Athletes & Teams',
    description: 'Preferred by top athletes and professional sports teams for our specialized care.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: '12 Subspeciality of Sports Under One Roof',
    description: 'A multidisciplinary team offering cutting-edge treatments across multiple domains.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Advanced Diagnostic & Treatment Technology',
    description: 'Equipped with the latest innovations for precise assessment and faster recovery.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'World-Class Rehab & Performance Center',
    description: 'A state-of-the-art facility designed for rehabilitation, fitness, and peak performance.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Proven Recovery Success',
    description: 'Over 100+ athletes successfully rehabilitated and returned to peak condition.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gray-100 text-gray-900 transition-colors duration-500">
      <div className="">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="relative inline-block px-4 py-2 mb-4">

            {/* <h2 className="text-4xl md:text-5xl font-extrabold uppercase drop-shadow-lg relative tracking-wide">
              <strong>Why Choose Us?</strong>
            </h2> */}
          </div>

          {/* <p className="text-xl mx-auto mt-4 text-gray-700">
            Discover what makes us the{' '}
            <span className="text-green-500">#1 Sports Medicine & Rehab Center</span> in India.
          </p> */}
        </motion.div>

        {/* Marquee Scroll */}
        <div className="relative overflow-hidden w-full py-4">
          <motion.div
            className="flex space-x-8 w-full"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: 'linear',
            }}
          >
            {[...features, ...features].map((feature, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[300px] p-6 rounded-2xl transition-transform duration-300 shadow-xl hover:scale-105 group bg-white border border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full shadow-md bg-green-100 text-green-700">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-green-700">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
