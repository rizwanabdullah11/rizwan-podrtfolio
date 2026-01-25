'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Globe, MapPin, Award, ExternalLink } from 'lucide-react';
import { SiReact, SiGithub } from 'react-icons/si';

export default function Education() {
  return (
    <motion.section 
      id="education"
      className="mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-white via-amber-50 to-orange-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-12 border border-amber-100 dark:border-gray-600 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-500/5 to-red-500/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <motion.div
              className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Education & Certifications
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Degree */}
            <motion.div 
              className="relative group bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-500"
              whileHover={{ x: 10, scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Air University</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                </div>
                <motion.div
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  2020 - 2024
                </motion.div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Achievements:</h4>
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
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <SiReact className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Developing Front-End Apps with React
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">IBM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs font-medium">
                    April 2023
                  </span>
                </div>
                <motion.a 
                  href="https://coursera.org/verify/PGS8NVNDM6UN"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </motion.a>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <SiGithub className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Getting Started with Git and GitHub
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">IBM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-medium">
                    June 2023
                  </span>
                </div>
                <motion.a 
                  href="https://coursera.org/verify/L7HMA72GX8DU"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </motion.a>
              </motion.div>

              {/* Additional Skills */}
              <motion.div
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Continuous Learning
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    'Advanced React Patterns',
                    'System Design',
                    'Cloud Architecture',
                    'DevOps Practices'
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}