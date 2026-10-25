'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Mail, 
  Code,
  Globe,
  FolderOpen,
  Smartphone
} from 'lucide-react';
import { SiNextdotjs } from 'react-icons/si';
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
      className="min-h-[100dvh] bg-white pt-20 relative overflow-hidden"
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
                className="px-3.5 py-1.5 text-xs font-semibold border-0 bg-orange-500 text-white shadow-orange-500/30"
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
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-black rounded-xl hover:text-orange-500  transition-all duration-300 cursor-default"
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
                  <div className="text-xs sm:text-sm font-semibold text-black">
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
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300"
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

          {/* Right Content - 3D Animated Profile Presentation */}
          <motion.div
            className="relative flex items-center justify-center order-1 lg:order-2 mb-12 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Ambient Glow - decorative radial, taste-skill-ignore */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl" />
            </div>

            {/* 3D Floating Interactive Card */}
            <motion.div
              className="relative group cursor-pointer my-4"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                rotateY: -8,
                rotateX: 6,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Outer Neon Gradient Glow Frame */}
              <div className="absolute -inset-1.5 bg-orange-500 rounded-[34px] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Main Image Container */}
              <div className="relative w-72 sm:w-80 lg:w-[360px] h-[390px] sm:h-[440px] lg:h-[470px] rounded-[30px] p-2.5 bg-white overflow-hidden">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gray-100">
                  <Image
                    src={RizwanImage}
                    alt="Rizwan Abdullah"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top scale-102 group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </motion.div>
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