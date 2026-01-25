'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  level?: number;
  color: string;
  description?: string;
  index?: number;
  type?: 'progress' | 'badge' | 'detailed';
}

export default function SkillCard({
  name,
  icon,
  level,
  color,
  description,
  index = 0,
  type = 'progress'
}: SkillCardProps) {
  if (type === 'badge') {
    return (
      <motion.div
        className={`group relative overflow-hidden bg-gradient-to-r ${color} p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -2 }}
      >
        <div className="flex items-center gap-3 text-white">
          {icon}
          <span className="font-semibold text-sm">{name}</span>
        </div>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
    );
  }

  if (type === 'detailed') {
    return (
      <motion.div
        className="group bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.02, x: -5 }}
      >
        <div className="flex items-start gap-4">
          <div className={`p-2 bg-gradient-to-r ${color} rounded-lg`}>
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{name}</h4>
            {description && (
              <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default progress type
  return (
    <motion.div
      className="group bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-semibold text-gray-900 dark:text-gray-100">{name}</span>
        </div>
        {level && (
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
        )}
      </div>
      {level && (
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <motion.div
            className={`h-2 bg-gradient-to-r ${color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
          />
        </div>
      )}
    </motion.div>
  );
}