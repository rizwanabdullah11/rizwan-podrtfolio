'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github as GithubIcon, Linkedin as LinkedinIcon } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { personalInfo } from '@/data/personal';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Contact() {
  return (
    <motion.section 
      id="contact"
      className="mb-24 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="relative bg-white py-4 overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <SectionHeader
            icon={<Mail className="w-8 h-8 text-white" />}
            title="Get In Touch"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-black mb-6">Let&apos;s Connect</h3>
              <p className="text-black mb-6 leading-relaxed">
                I&apos;m always interested in new opportunities, SEO optimization initiatives, and full-stack projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="group flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-black font-medium hover:text-orange-500 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-black font-medium hover:text-orange-500 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-black font-medium">{personalInfo.location}</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="group flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <SiGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">GitHub</p>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-black font-medium hover:text-orange-500 transition-colors">
                      @rizwanabdullah11
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="group flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <SiLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">LinkedIn</p>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-black font-medium hover:text-orange-500 transition-colors">
                      Connect with me
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 text-black shadow-sm hover:border-orange-400"
                    placeholder="Your Name"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 text-black shadow-sm hover:border-orange-400"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 text-black shadow-sm hover:border-orange-400"
                    placeholder="What's this about?"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50 text-black shadow-sm hover:border-orange-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl shadow-lg shadow-black/20 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
