'use client';

import { motion } from 'motion/react';
import { Phone, CalendarCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/wood/1920/1080?blur=5')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Need Tree Work Done? <br className="hidden md:block" />
            <span className="text-secondary">Call the Pros.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Fast response. Affordable pricing. Professional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:7328744735"
              className="w-full sm:w-auto px-10 py-5 bg-secondary text-secondary-foreground rounded-xl font-bold text-xl hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] flex items-center justify-center gap-3"
            >
              <Phone size={28} />
              Call Now
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white border-2 border-white/20 rounded-xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <CalendarCheck size={28} />
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
