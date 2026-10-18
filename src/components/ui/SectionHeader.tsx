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
  gradient = 'from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-200',
  iconGradient = 'from-orange-500 to-orange-600'
}: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-6 mb-12">
      <motion.div
        className={`p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/25`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <div>
        <h2 className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
          {title}
        </h2>
        <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
      </div>
    </div>
  );
}