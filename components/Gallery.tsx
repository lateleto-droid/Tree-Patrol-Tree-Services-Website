'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryItems = [
  {
    title: 'Tree Removal',
    image: '/tree-removal.jpg',
  },
  {
    title: 'Tree Trimming',
    image: '/tree-trimming.jpg',
  },
  {
    title: 'Stump Grinding',
    image: '/stump-grinding.jpg',
  },
  {
    title: 'Clean-Up Results',
    image: '/clean-up.png',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Recent Projects Gallery
          </h3>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the quality of our tree removal, trimming, and stump grinding services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-video"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
