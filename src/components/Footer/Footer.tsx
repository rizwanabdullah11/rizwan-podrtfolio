'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
