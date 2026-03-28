'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary text-primary-foreground z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-secondary">
              <div className="relative flex items-center justify-center w-12 h-16">
                <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Shield */}
                  <path d="M10 15 Q 30 25 50 30 Q 70 25 90 15 C 95 40 90 80 50 115 C 10 80 5 40 10 15 Z" fill="#000080" stroke="#E5E7EB" strokeWidth="3" strokeLinejoin="round"/>
                  {/* Inner Shield */}
                  <path d="M18 24 Q 34 32 50 36 Q 66 32 82 24 C 86 44 82 76 50 105 C 18 76 14 44 18 24 Z" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinejoin="round"/>
                  {/* Tree Silhouette */}
                  <path d="M50 90 C47 90 47 75 47 65 C38 65 30 55 30 42 C30 28 40 18 50 18 C60 18 70 28 70 42 C70 55 62 65 53 65 C53 75 53 90 50 90 Z" fill="#E5E7EB"/>
                  {/* Tree Branches */}
                  <path d="M50 65 L42 52 M50 60 L58 48 M47 52 L38 42 M53 52 L62 42 M50 42 L42 30 M50 42 L58 30" stroke="#000080" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="hidden sm:block">TREE PATROL</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:7328744735"
              className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-md font-bold flex items-center gap-2 hover:bg-yellow-500 transition-colors"
            >
              <Phone size={18} />
              (732) 874-4735
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-blue-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-secondary hover:bg-blue-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:7328744735"
                className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-secondary text-secondary-foreground"
              >
                Call Now: (732) 874-4735
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
