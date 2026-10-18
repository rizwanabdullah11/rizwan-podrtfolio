'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Globe, MapPin, Award, ExternalLink } from 'lucide-react';
import { SiReact, SiGithub } from 'react-icons/si';

export default function Education() {
  return (
    <motion.section 
      id="education"
      className="mb-24 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="relative bg-white py-4 overflow-hidden"
      >
        {/* Soft Orange Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <motion.div
              className="p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/25"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-2">
                Education & Certifications
              </h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Degree */}
            <motion.div 
              className="relative group bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ x: 6, scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-500/20 text-white flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2 group-hover:text-orange-600 transition-colors">
                    Bachelor of Computer Science
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-orange-500" />
                    <span className="text-lg font-medium text-black">Air University</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                </div>
                <motion.div
                  className="px-4 py-1.5 bg-black text-white rounded-full text-sm font-semibold shadow-md shadow-black/20"
                  whileHover={{ scale: 1.05 }}
                >
                  2020 - 2024
                </motion.div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-orange-500 text-sm uppercase tracking-wider">Key Achievements:</h4>
                {[
                  'Graduated with distinction in Software Engineering',
                  'Led multiple capstone projects using modern tech stack',
                  'Active member of Computer Science Society',
                  'Specialized in Mobile App Development and AI'
                ].map((achievement, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <div className="space-y-6">
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors rounded-xl flex items-center justify-center flex-shrink-0">
                      <SiReact className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                        Developing Front-End Apps with React
                      </h3>
                      <p className="text-black font-medium">IBM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                    April 2023
                  </span>
                </div>
                <motion.a 
                  href="https://coursera.org/verify/PGS8NVNDM6UN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-lg text-sm font-semibold shadow-md shadow-black/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </motion.a>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors rounded-xl flex items-center justify-center flex-shrink-0">
                      <SiGithub className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                        Getting Started with Git and GitHub
                      </h3>
                      <p className="text-black font-medium">IBM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                    June 2023
                  </span>
                </div>
                <motion.a 
                  href="https://coursera.org/verify/L7HMA72GX8DU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-lg text-sm font-semibold shadow-md shadow-black/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </motion.a>
              </motion.div>

              {/* Continuous Learning */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 shadow-sm transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h4 className="font-bold text-orange-500 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  Continuous Learning
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    'Advanced Next.js & RBAC',
                    'Technical SEO Architecture',
                    'React Native Performance',
                    'DevOps & System Design'
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-black">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}