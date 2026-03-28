'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="#" className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-secondary mb-6 inline-flex">
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
              <span>TREE PATROL</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Top-rated tree service in Woodbridge, NJ. Fast, affordable, and fully insured tree removal, trimming, and stump grinding.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tree_patrol/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Instagram size={20} />
              </a>
              {/* Add other social links if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-gray-400 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-secondary transition-colors">Reviews</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Woodbridge, NJ</li>
              <li><a href="tel:7328744735" className="hover:text-secondary transition-colors">(732) 874-4735</a></li>
              <li><a href="tel:7328965555" className="hover:text-secondary transition-colors">(732) 896-5555</a></li>
              <li><a href="mailto:treepatrol.tree@gmail.com" className="hover:text-secondary transition-colors">treepatrol.tree@gmail.com</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Tree Patrol Tree Service. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
