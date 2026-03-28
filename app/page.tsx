import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Trust from '@/components/Trust';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyCall from '@/components/StickyCall';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <About />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
      <StickyCall />
    </main>
  );
}
