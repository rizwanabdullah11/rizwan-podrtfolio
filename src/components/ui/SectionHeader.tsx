'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  icon: ReactNode;
  gradient?: string;
  iconGradient?: string;
}

export default function SectionHeader({
  title,
  icon,
  gradient = 'from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300',
  iconGradient = 'from-teal-500 to-emerald-600'
}: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-6 mb-12">
      <motion.div
        className={`p-4 bg-gradient-to-br ${iconGradient} rounded-2xl shadow-lg`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <div>
        <h2 className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
          {title}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r ${iconGradient} rounded-full`}></div>
      </div>
    </div>
  );
}