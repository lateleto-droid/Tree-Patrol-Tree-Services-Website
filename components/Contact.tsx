'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Contact Tree Patrol
          </h3>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to get started? Contact us today for a free estimate on your tree service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm"
          >
            <h4 className="text-2xl font-bold text-primary mb-8">Contact Information</h4>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">Call Us</p>
                  <a href="tel:7328744735" className="block text-gray-600 hover:text-secondary transition-colors text-lg">(732) 874-4735</a>
                  <a href="tel:7328965555" className="block text-gray-600 hover:text-secondary transition-colors text-lg">(732) 896-5555</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">Email Us</p>
                  <a href="mailto:treepatrol.tree@gmail.com" className="block text-gray-600 hover:text-secondary transition-colors text-lg">treepatrol.tree@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">Service Area</p>
                  <p className="text-gray-600 text-lg">Woodbridge, NJ & Surrounding Areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">Follow Us</p>
                  <a href="https://www.instagram.com/tree_patrol/?hl=en" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-secondary transition-colors text-lg">@tree_patrol</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-primary mb-8">Request a Free Quote</h4>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="(732) 555-0123" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all bg-white">
                  <option>Tree Removal</option>
                  <option>Tree Trimming</option>
                  <option>Stump Grinding</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none" placeholder="Tell us about your tree service needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2">
                <Send size={20} />
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
