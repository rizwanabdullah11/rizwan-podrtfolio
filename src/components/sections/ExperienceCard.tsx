'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Experience } from '@/data/types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast?: boolean;
}

export default function ExperienceCard({ experience, index, isLast = false }: ExperienceCardProps) {
  return (
    <motion.div 
      className={`relative group bg-gradient-to-r ${experience.bgGradient} rounded-2xl p-8 border ${experience.borderColor} hover:shadow-xl transition-all duration-500`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      {/* Timeline Connector */}
      <div className="absolute -left-6 top-8 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg border-4 border-white dark:border-gray-800"></div>
      {!isLast && (
        <div className="absolute -left-4 top-12 w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"></div>
      )}
      
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
            {experience.title}
            {experience.current && (
              <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                Current
              </span>
            )}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
        <motion.div
          className={`mt-4 lg:mt-0 px-4 py-2 bg-gradient-to-r ${experience.gradient} text-white rounded-full text-sm font-medium shadow-lg`}
          whileHover={{ scale: 1.05 }}
        >
          {experience.period}
        </motion.div>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Achievements:</h4>
        {experience.achievements.map((achievement, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.gradient} mt-2 flex-shrink-0`}></div>
            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}