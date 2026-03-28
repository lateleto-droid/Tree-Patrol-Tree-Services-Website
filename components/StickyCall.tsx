'use client';

import { Phone } from 'lucide-react';

export default function StickyCall() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-primary border-t border-white/10 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
      <div className="flex">
        <a
          href="tel:7328744735"
          className="flex-1 py-4 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold text-lg hover:bg-yellow-500 transition-colors"
        >
          <Phone size={20} />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 py-4 flex items-center justify-center gap-2 text-white font-bold text-lg hover:bg-white/10 transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
