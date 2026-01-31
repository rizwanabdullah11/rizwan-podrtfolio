'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Mail, 
  Code,
  Globe,
  Award,
  FolderOpen
} from 'lucide-react';
import { 
  SiReact, 
  SiNodedotjs,
  SiTypescript
} from 'react-icons/si';
import { FaMobile } from 'react-icons/fa';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import RizwanImage from '@/assets/Rizwan.jpeg';

export default function Hero() {
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
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Badge 
                variant="outline" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300"
              >
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Opportunities</span>
              </Badge>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight lg:leading-[0.9] tracking-tight">
                Software Engineer
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Rizwan Abdullah
                </span>
              </h1>
            </motion.div>

            {/* Expertise Tags */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                { label: 'Mobile Developer', icon: FaMobile, color: 'from-teal-500 to-emerald-600' },
                { label: 'Web Developer', icon: Globe, color: 'from-emerald-500 to-cyan-600' },
                { label: 'Full Stack', icon: Code, color: 'from-cyan-500 to-teal-600' }
              ].map((tag, index) => (
                <motion.div
                  key={tag.label}
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${tag.color} text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <tag.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tag.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              I architect and develop enterprise-grade mobile and web applications. 
              <span className="text-teal-600 dark:text-teal-400 font-medium"> Transforming complex requirements into elegant, scalable solutions.</span>
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { number: '3+', label: 'Years Experience', sublabel: 'Professional' },
                { number: '50+', label: 'Projects Delivered', sublabel: 'Enterprise & Startups' },
                { number: '100%', label: 'Client Satisfaction', sublabel: 'Quality Focused' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <motion.a
                href="mailto:rizwan.abdullah193@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Let&apos;s Collaborate
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FolderOpen className="w-5 h-5" />
                View Portfolio
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Profile Area */}
          <motion.div
            className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Advanced Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-96 h-96 bg-gradient-to-br from-teal-500/20 via-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Profile Content */}
            <div className="relative z-10 text-center space-y-6 sm:space-y-8">
              {/* Enhanced Avatar with Tech Stack Orbit */}
              <motion.div
                className="relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.4 }}
              >
                {/* Main Avatar with Real Image */}
                <motion.div
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full shadow-2xl relative overflow-hidden ring-4 ring-teal-500/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src={RizwanImage.src} 
                      alt="Rizwan Abdullah"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-6xl lg:text-7xl font-bold bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600 text-white">
                      RA
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full pointer-events-none"></div>
                </motion.div>

                {/* Orbiting Tech Icons */}
                {[
                  { icon: SiReact, delay: 0, color: 'text-cyan-500' },
                  { icon: SiNodedotjs, delay: 1, color: 'text-green-500' },
                  { icon: SiTypescript, delay: 2, color: 'text-blue-500' },
                  { icon: FaMobile, delay: 3, color: 'text-teal-500' }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [0, 360],
                      x: [0, Math.cos(tech.delay * Math.PI / 2) * 150],
                      y: [0, Math.sin(tech.delay * Math.PI / 2) * 150],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: tech.delay * 0.5
                    }}
                  >
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Certification Cards */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 max-w-sm mx-auto px-4 sm:px-0">
                <motion.div
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <SiReact className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                          SOFTWARE ENGINEER
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          React Native & Full Stack
                        </p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                    <span>Enterprise Ready</span>
                    <span>3+ Years</span>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                          FULL STACK DEVELOPER
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Mobile & Web Solutions
                        </p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                    <span>Certified Professional</span>
                    <span>Advanced</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}