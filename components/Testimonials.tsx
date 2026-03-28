'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Mo understood the sentimental value of our tree and did an amazing job shaping it. The team was quick, professional, and left everything spotless. You didn't even know they were there!",
    author: "Satisfied Customer",
  },
  {
    text: "I couldn't be happier. Got a tree and 2 stumps removed fast and efficiently. They came on time and finished within an hour. Great pricing and great service!",
    author: "Happy Homeowner",
  },
  {
    text: "Mo came, gave an estimate, and we signed on the spot. Work was done professionally and everything was cleaned up. Highly recommend!",
    author: "Local Resident",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            What Our Clients Say
          </h3>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from real customers in Woodbridge, NJ and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-gray-200 w-12 h-12 group-hover:text-secondary/20 transition-colors" />
              <div className="flex text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">Woodbridge, NJ</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
