'use client';

import { motion } from 'motion/react';
import { ShieldCheck, DollarSign, BadgePercent, Calculator } from 'lucide-react';

export default function Trust() {
  const features = [
    {
      title: 'Reasonable Rates',
      description: 'Fair, transparent pricing without hidden fees.',
      icon: DollarSign,
    },
    {
      title: 'Fully Insured',
      description: 'Complete peace of mind for your property and our team.',
      icon: ShieldCheck,
    },
    {
      title: 'Free Estimates',
      description: 'No-obligation quotes for any tree service project.',
      icon: Calculator,
    },
    {
      title: 'Special Discounts',
      description: 'Exclusive savings for Law Enforcement & Veterans.',
      icon: BadgePercent,
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/forest/1920/1080?blur=10')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <feature.icon size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-primary">
            For Every Tree We Remove, We Replant One 🌱
          </h2>
          <p className="text-lg md:text-xl font-medium text-primary/80 max-w-3xl mx-auto">
            We are committed to preserving the environment and giving back to our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
