'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 font-medium rounded-xl transition-all duration-300 hover:';
  
  const variants = {
    primary: 'bg-black hover:bg-gray-900 text-white shadow-black/20',
    secondary: 'bg-black text-white border border-black hover:bg-gray-900',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const content = (
    <>
      {icon && icon}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}