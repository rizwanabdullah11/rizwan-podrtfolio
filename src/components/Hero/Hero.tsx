'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Code,
  Globe,
  Award,
  FolderOpen,
  Smartphone
} from 'lucide-react';
import { 
  SiReact, 
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
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
      className="min-h-screen bg-white pt-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
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
            {/* Focus badges */}
            <motion.div
              className="flex flex-wrap items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Badge
                className="px-3.5 py-1.5 text-xs font-semibold border-0 bg-orange-500 text-white shadow-sm shadow-orange-500/30"
              >
                Next.js & Enterprise Portals
              </Badge>
              <Badge
                variant="outline"
                className="px-3.5 py-1.5 text-xs font-semibold border-orange-500/40 text-orange-600 bg-orange-500/5 hover:bg-orange-500 hover:text-white transition-colors"
              >
                Technical & Local SEO Expert
              </Badge>
              <Badge variant="outline" className="px-3.5 py-1.5 text-xs font-semibold border-gray-300 text-gray-700 gap-1.5 hover:border-orange-500 hover:text-orange-500 transition-colors">
                <Smartphone className="w-3.5 h-3.5" />
                React Native
              </Badge>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-orange-500 leading-tight lg:leading-[0.9] tracking-tight">
                Software Engineer
                <br />
                <span className="text-orange-500">
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
                { label: 'Next.js & Portals', icon: SiNextdotjs },
                { label: 'SEO Implementation', icon: Globe },
                { label: 'ISSO-style RBAC Panels', icon: Code },
                { label: 'React Native', icon: Smartphone },
              ].map((tag, index) => (
                <motion.div
                  key={tag.label}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-black rounded-xl shadow-sm hover:text-orange-500 hover:shadow-md transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <tag.icon className="w-4 h-4 shrink-0 text-orange-500" />
                  <span className="text-sm font-semibold leading-tight">{tag.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-black max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              I architect high-performance web applications with Next.js & TypeScript, deliver comprehensive on-page & technical SEO for commercial websites, and build enterprise-grade RBAC management portals.
              <span className="text-orange-500 font-medium"> I also develop cross-platform mobile apps with React Native.</span>
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { number: '2+', label: 'Years Experience', sublabel: 'Professional' },
                { number: '12+', label: 'Projects Delivered', sublabel: 'Enterprise & Startups' },
                { number: '100%', label: 'Client Satisfaction', sublabel: 'Quality Focused' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group p-3 rounded-xl transition-colors hover:bg-orange-500/5"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-black uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600">
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
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-lg shadow-black/20 hover:bg-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Let&apos;s Collaborate
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-3 px-6 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300"
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
            {/* Background Soft Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
                {/* Main Avatar with Orange Ring */}
                <motion.div
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full shadow-2xl relative overflow-hidden ring-4 ring-orange-500 shadow-orange-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src={RizwanImage.src} 
                      alt="Rizwan Abdullah"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-6xl lg:text-7xl font-bold bg-orange-500 text-white">
                      RA
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                {/* Orbiting tech — clean white & dark circles with orange hover */}
                {[
                  { icon: SiNextdotjs, slot: 0 },
                  { icon: SiReact, slot: 1 },
                  { icon: SiNodedotjs, slot: 2 },
                  { icon: FaReact, slot: 3, title: 'React Native' },
                  { icon: SiTypescript, slot: 4 },
                ].map((tech) => {
                  const angle = (tech.slot * 2 * Math.PI) / 5;
                  return (
                  <motion.div
                    key={tech.slot}
                    title={'title' in tech ? tech.title : undefined}
                    className="absolute w-12 h-12 bg-white text-black hover:text-orange-500 rounded-full shadow-md flex items-center justify-center transition-colors"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [0, 360],
                      x: [0, Math.cos(angle) * 150],
                      y: [0, Math.sin(angle) * 150],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: tech.slot * 0.5
                    }}
                  >
                    <tech.icon className="w-6 h-6" />
                  </motion.div>
                  );
                })}
              </motion.div>

              {/* Enhanced Certification Cards */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 max-w-sm mx-auto px-4 sm:px-0">
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/25">
                        <SiReact className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-sm text-left">
                          SOFTWARE ENGINEER
                        </h3>
                        <p className="text-xs text-orange-500 font-medium text-left">
                          Next.js & RBAC Portals
                        </p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Enterprise Ready</span>
                    <span>2+ Years</span>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/25">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black text-sm text-left">
                          SEO & FULL STACK
                        </h3>
                        <p className="text-xs text-orange-500 font-medium text-left">
                          Technical & Local SEO · Next.js
                        </p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Proven Performance</span>
                    <span>High Organic Reach</span>
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
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}