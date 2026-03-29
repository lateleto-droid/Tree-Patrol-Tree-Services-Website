'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, Award } from 'lucide-react';

export default function About() {
  const points = [
    'Trusted & Top-Rated in Woodbridge, NJ',
    'Professionalism, Speed, and Fair Pricing',
    'High-Quality Removal, Trimming & Grinding',
    'Care & Respect for Your Property',
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/team.jpg"
                alt="Tree Patrol Team at Work"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-xl border-4 border-gray-50 hidden md:flex flex-col items-center text-center">
              <Award className="w-10 h-10 mb-2" />
              <p className="text-4xl font-extrabold mb-1">10+</p>
              <p className="text-sm font-bold uppercase tracking-wider">Years of<br/>Experience</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Your Trusted Local Tree Care Experts
            </h3>
            <div className="w-20 h-1 bg-secondary mb-8 rounded-full"></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tree Patrol Tree Service is a trusted, top-rated company serving Woodbridge, NJ and surrounding areas. Known for professionalism, speed, and fair pricing, the team takes pride in delivering high-quality tree removal, trimming, and stump grinding services. Every project is handled with care, respect for your property, and attention to detail.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:7328744735"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg"
            >
              Speak With An Expert
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
