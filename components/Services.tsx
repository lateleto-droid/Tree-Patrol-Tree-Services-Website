'use client';

import { motion } from 'motion/react';
import { Scissors, TreePine, Axe, AlertTriangle, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Tree Trimming',
    description: 'Keep your trees healthy, safe, and beautiful with professional pruning and shaping.',
    icon: Scissors,
  },
  {
    title: 'Tree Removal',
    description: 'Safe and efficient removal of dead, diseased, or hazardous trees from your property.',
    icon: TreePine,
  },
  {
    title: 'Stump Grinding',
    description: 'Complete removal of unsightly stumps to reclaim your yard space.',
    icon: Axe,
  },
  {
    title: 'Emergency Services',
    description: '24/7 rapid response for storm damage and fallen trees threatening your home.',
    icon: AlertTriangle,
  },
  {
    title: 'Property Clean-Up',
    description: 'Thorough removal of branches, debris, and yard waste after storms or seasonal changes.',
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Our Professional Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive tree care solutions for residential and commercial properties in Woodbridge, NJ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                <service.icon size={32} className="text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
