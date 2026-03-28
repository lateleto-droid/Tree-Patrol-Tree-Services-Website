'use client';

import { motion } from 'motion/react';
import { Phone, CalendarCheck, Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-primary text-primary-foreground">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/treecutting/1920/1080?blur=2"
          alt="Tree Service Background"
          fill
          className="object-cover opacity-30"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 border border-secondary/30">
            Woodbridge, NJ & Surrounding Areas
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Top-Rated Tree Service <br className="hidden md:block" />
            <span className="text-secondary">You Can Trust</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
            Tree Removal, Trimming & Stump Grinding – Fast, Affordable, and Fully Insured.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2"
            >
              <CalendarCheck size={24} />
              Get Free Estimate
            </a>
            <a
              href="tel:7328744735"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Phone size={24} />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base font-medium"
        >
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span>4.8★ Rating</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <ThumbsUp size={28} className="text-secondary" />
            <span>100+ Reviews</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <ShieldCheck size={28} className="text-secondary" />
            <span>Fully Insured</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <CalendarCheck size={28} className="text-secondary" />
            <span>Free Estimates</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
