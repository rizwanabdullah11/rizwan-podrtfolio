'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, FolderOpen, Award, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'summary', label: 'ABOUT', icon: User },
    { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
    { id: 'skills', label: 'SKILLS', icon: Code },
    { id: 'education', label: 'EDUCATION', icon: Award },
    { id: 'projects', label: 'PROJECTS', icon: FolderOpen },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-sm z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-500/30">
              <span className="text-white font-bold text-sm">RA</span>
            </div>
            <div>
              <div className="text-xl font-bold text-black">Rizwan</div>
              <div className="text-xs text-orange-500 font-semibold -mt-1">Software Engineer</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group ${
                    activeSection === item.id
                      ? 'text-orange-600 bg-orange-50 font-semibold'
                      : 'text-black hover:text-orange-500 hover:bg-gray-50'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-orange-500 rounded-full"
                      layoutId="activeIndicator"
                      style={{ x: '-50%' }}
                    />
                  )}
                </motion.button>
              );
            })}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-xl bg-gray-100 text-black hover:bg-gray-200 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sun className="w-4 h-4 text-orange-500" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden border-t border-gray-100"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'text-white bg-orange-500 shadow-lg shadow-orange-500/25'
                      : 'text-black hover:text-orange-500 hover:bg-orange-500/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}