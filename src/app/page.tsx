'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero/Hero';
import Summary from '@/components/Summary/Summary';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import Education from '@/components/Education/Education';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}