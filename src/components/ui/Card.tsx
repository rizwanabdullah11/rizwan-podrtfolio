'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  gradient = 'from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700',
  hover = true,
  delay = 0
}: CardProps) {
  return (
    <motion.div
      className={`relative bg-gradient-to-br ${gradient} rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-600 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}