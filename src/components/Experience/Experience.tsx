'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      id="experience"
      className="mb-24"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div 
        className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Soft Orange Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <motion.div
              className="p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/25"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Professional Experience
              </h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((job, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp} 
                className="relative group bg-gray-50/60 dark:bg-gray-750 dark:bg-gray-700/40 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                whileHover={{ x: 6, scale: 1.01 }}
              >
                {/* Timeline Connector */}
                <div className="absolute -left-6 top-8 w-4 h-4 bg-orange-500 rounded-full shadow-md border-4 border-white dark:border-gray-800"></div>
                {index < experiences.length - 1 && (
                  <div className="absolute -left-4 top-12 w-0.5 h-24 bg-gray-200 dark:bg-gray-700"></div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <motion.div
                    className="mt-4 lg:mt-0 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold shadow-md shadow-orange-500/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {job.period}
                  </motion.div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm uppercase tracking-wider">Key Achievements:</h4>
                  {job.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}