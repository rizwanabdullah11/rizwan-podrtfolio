'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, Users, Award, Globe } from 'lucide-react';

export default function Summary() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.section 
      id="summary"
      className="mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-white via-teal-50 to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-teal-100 dark:border-gray-600 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-8">
            <motion.div
              className="p-4 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Professional Summary
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                Full Stack Software Engineer with <span className="font-semibold text-teal-600 dark:text-teal-400">3+ years of enterprise experience</span> specializing in React Native mobile development and ViciDial telephony solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Expert in architecting scalable applications, leading development teams, and delivering high-performance solutions for Fortune 500 companies and innovative startups.
              </p>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Enterprise Projects', value: '15+', icon: Briefcase },
                  { label: 'Team Leadership', value: '5+ devs', icon: Users },
                  { label: 'Code Quality', value: '99.9%', icon: Award },
                  { label: 'Client Retention', value: '100%', icon: Globe }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <stat.icon className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Professional Attributes */}
            <div className="space-y-4">
              {[
                { title: 'Technical Leadership', desc: 'Leading cross-functional teams and mentoring junior developers', icon: '🚀' },
                { title: 'Architecture Design', desc: 'Designing scalable, maintainable system architectures', icon: '🏗️' },
                { title: 'Performance Optimization', desc: 'Optimizing applications for maximum speed and scalability', icon: '⚡' },
                { title: 'Code Quality', desc: 'Implementing best practices, testing, and CI/CD pipelines', icon: '✨' }
              ].map((attr, index) => (
                <motion.div
                  key={attr.title}
                  className="flex items-start gap-4 p-4 bg-white/30 dark:bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                  <span className="text-2xl">{attr.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{attr.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{attr.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}