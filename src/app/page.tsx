'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  User,
  Users,
  Briefcase,
  GraduationCap,
  FolderOpen
} from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGithub,
  SiLinkedin,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiDart
} from 'react-icons/si';
import { FaReact, FaMobile, FaServer, FaPhone } from 'react-icons/fa';
import Navigation from '@/components/Navigation';

export default function Portfolio() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section - Binjan Inspired Design */}
      <motion.section 
        id="home"
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden"
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
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Professional Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-200 dark:border-teal-800 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-teal-700 dark:text-teal-300">Available for Senior Roles</span>
              </motion.div>

              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-[0.9] tracking-tight">
                  Senior Developer
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
                  { label: 'React Native Expert', icon: SiReact, color: 'from-cyan-500 to-blue-600' },
                  { label: 'ViciDial Specialist', icon: FaPhone, color: 'from-emerald-500 to-teal-600' },
                  { label: 'Full Stack', icon: Code, color: 'from-purple-500 to-indigo-600' }
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
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                I architect and develop enterprise-grade mobile applications and telephony solutions. 
                <span className="text-teal-600 dark:text-teal-400 font-medium"> Transforming complex requirements into elegant, scalable solutions.</span>
              </motion.p>

              {/* Stats Row */}
              <motion.div
                className="grid grid-cols-3 gap-6 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {[
                  { number: '3+', label: 'Years Experience', sublabel: 'Senior Level' },
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
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
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
                  Let's Collaborate
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
              className="relative flex items-center justify-center"
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
              <div className="relative z-10 text-center space-y-8">
                {/* Enhanced Avatar with Tech Stack Orbit */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.4 }}
                >
                  {/* Main Avatar */}
                  <motion.div
                    className="w-56 h-56 lg:w-64 lg:h-64 mx-auto bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-6xl lg:text-7xl font-bold text-white">RA</span>
                    
                    {/* Subtle Pattern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                  </motion.div>

                  {/* Orbiting Tech Icons */}
                  {[
                    { icon: SiReact, delay: 0, color: 'text-cyan-500' },
                    { icon: SiNodedotjs, delay: 1, color: 'text-green-500' },
                    { icon: SiTypescript, delay: 2, color: 'text-blue-500' },
                    { icon: FaPhone, delay: 3, color: 'text-emerald-500' }
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
                <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
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
                            SENIOR DEVELOPER
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
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                          <FaPhone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                            VICIDIAL EXPERT
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Call Center Solutions
                          </p>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                      <span>Certified Specialist</span>
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

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Summary Section - Enhanced */}
        <motion.section 
          id="summary"
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-12 border border-gray-100 dark:border-gray-600 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  className="p-4 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <User className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    Professional Summary
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
              
              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    Senior Full Stack Developer with <span className="font-semibold text-teal-600 dark:text-teal-400">3+ years of enterprise experience</span> specializing in React Native mobile development and ViciDial telephony solutions.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Expert in architecting scalable applications, leading development teams, and delivering high-performance solutions for Fortune 500 companies and innovative startups.
                  </p>
                  
                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[
                      { label: 'Enterprise Projects', value: '15+', icon: Briefcase },
                      { label: 'Team Leadership', value: '5+ devs', icon: Users },
                      { label: 'Code Quality', value: '99.9%', icon: Award },
                      { label: 'Client Retention', value: '100%', icon: Globe }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <stat.icon className="w-6 h-6 text-teal-600 dark:text-teal-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Professional Attributes */}
                <div className="space-y-4">
                  {[
                    { title: 'Technical Leadership', desc: 'Leading cross-functional teams and mentoring junior developers', icon: '🚀' },
                    { title: 'Architecture Design', desc: 'Designing scalable, maintainable system architectures', icon: '🏗️' },
                    { title: 'Performance Optimization', desc: 'Optimizing applications for maximum speed and scalability', icon: '⚡' },
                    { title: 'Code Quality', desc: 'Implementing best practices, testing, and CI/CD pipelines', icon: '✨' }
                  ].map((attr, index) => (
                    <motion.div
                      key={attr.title}
                      className="flex items-start gap-4 p-4 bg-white/30 dark:bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.5)' }}
                    >
                      <span className="text-2xl">{attr.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{attr.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{attr.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Experience Section - Enhanced */}
        <motion.section 
          id="experience"
          className="mb-24"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-12 border border-indigo-100 dark:border-gray-600 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-12">
                <motion.div
                  className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    Professional Experience
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Senior Software Developer",
                    company: "MUST Pvt Ltd",
                    location: "MGC Complex G8 Markaz, Islamabad, Pakistan",
                    period: "May 2025 -- Present",
                    gradient: "from-blue-500 to-cyan-500",
                    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
                    borderColor: "border-blue-200 dark:border-blue-800",
                    achievements: [
                      "Leading development of enterprise-grade React Native applications",
                      "Architecting scalable backend solutions with Node.js and PostgreSQL",
                      "Mentoring junior developers and establishing coding standards",
                      "Implementing CI/CD pipelines and automated testing frameworks"
                    ]
                  },
                  {
                    title: "Software Engineer (Remote)",
                    company: "DragSense",
                    location: "Islamabad, Pakistan",
                    period: "February 2025 -- April 2025",
                    gradient: "from-indigo-500 to-purple-500",
                    bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
                    borderColor: "border-indigo-200 dark:border-indigo-800",
                    achievements: [
                      "Developed cross-platform mobile applications using React Native",
                      "Integrated real-time features with WebSocket and Firebase",
                      "Optimized application performance resulting in 40% faster load times",
                      "Collaborated with international teams across different time zones"
                    ]
                  },
                  {
                    title: "Full Stack Web Developer",
                    company: "iOPTIME Pvt Ltd",
                    location: "G8 Markaz, Islamabad, Pakistan",
                    period: "November 2024 -- January 2025",
                    gradient: "from-emerald-500 to-teal-500",
                    bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
                    borderColor: "border-emerald-200 dark:border-emerald-800",
                    achievements: [
                      "Built responsive web applications with Next.js and TypeScript",
                      "Implemented ViciDial call center solutions for enterprise clients",
                      "Developed RESTful APIs and integrated third-party services",
                      "Delivered projects 20% ahead of schedule with zero critical bugs"
                    ]
                  }
                ].map((job, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp} 
                    className={`relative group bg-gradient-to-r ${job.bgGradient} rounded-2xl p-8 border ${job.borderColor} hover:shadow-xl transition-all duration-500`}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    {/* Timeline Connector */}
                    <div className="absolute -left-6 top-8 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg border-4 border-white dark:border-gray-800"></div>
                    {index < 2 && (
                      <div className="absolute -left-4 top-12 w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"></div>
                    )}
                    
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{job.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <motion.div
                        className={`mt-4 lg:mt-0 px-4 py-2 bg-gradient-to-r ${job.gradient} text-white rounded-full text-sm font-medium shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {job.period}
                      </motion.div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Achievements:</h4>
                      {job.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.5 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${job.gradient} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Education Section - Enhanced */}
        <motion.section 
          id="education"
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-white via-amber-50 to-orange-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-12 border border-amber-100 dark:border-gray-600 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-500/5 to-red-500/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-12">
                <motion.div
                  className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    Education & Certifications
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Degree */}
                <motion.div 
                  className="relative group bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all duration-500"
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Bachelor of Computer Science
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Air University</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>Islamabad, Pakistan</span>
                      </div>
                    </div>
                    <motion.div
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      2020 - 2024
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Achievements:</h4>
                    {[
                      'Graduated with distinction in Software Engineering',
                      'Led multiple capstone projects using modern tech stack',
                      'Active member of Computer Science Society',
                      'Specialized in Mobile App Development and AI'
                    ].map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Certifications */}
                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                          <SiReact className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            Developing Front-End Apps with React
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">IBM</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs font-medium">
                        April 2023
                      </span>
                    </div>
                    <motion.a 
                      href="https://coursera.org/verify/PGS8NVNDM6UN"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Certificate
                    </motion.a>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                          <SiGithub className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            Getting Started with Git and GitHub
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">IBM</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-medium">
                        June 2023
                      </span>
                    </div>
                    <motion.a 
                      href="https://coursera.org/verify/L7HMA72GX8DU"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Certificate
                    </motion.a>
                  </motion.div>

                  {/* Additional Skills */}
                  <motion.div
                    className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      Continuous Learning
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {[
                        'Advanced React Patterns',
                        'System Design',
                        'Cloud Architecture',
                        'DevOps Practices'
                      ].map((skill, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section - Enhanced */}
        <motion.section 
          id="skills"
          className="mb-24"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-white via-green-50 to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-12 border border-green-100 dark:border-gray-600 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-12">
                <motion.div
                  className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    Technical Expertise
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Programming Languages */}
                <motion.div variants={fadeInUp} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                      <SiReact className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Programming Languages</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: 'JavaScript', icon: SiJavascript, level: 95, color: 'from-yellow-500 to-orange-500' },
                      { name: 'TypeScript', icon: SiTypescript, level: 90, color: 'from-blue-500 to-blue-600' },
                      { name: 'Python', icon: SiPython, level: 85, color: 'from-green-500 to-blue-500' },
                      { name: 'C++', icon: SiCplusplus, level: 80, color: 'from-blue-600 to-purple-600' },
                      { name: 'Dart', icon: SiDart, level: 75, color: 'from-blue-400 to-cyan-500' }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="group bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Frontend & Mobile */}
                <motion.div variants={fadeInUp} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                      <FaMobile className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Frontend & Mobile</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'React.js', icon: SiReact, color: 'from-cyan-400 to-blue-500' },
                      { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-700 to-gray-900' },
                      { name: 'React Native', icon: FaReact, color: 'from-cyan-500 to-blue-600' },
                      { name: 'Redux', icon: SiRedux, color: 'from-purple-500 to-purple-700' },
                      { name: 'Tailwind', icon: SiTailwindcss, color: 'from-cyan-400 to-teal-500' },
                      { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-600' }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className={`group relative overflow-hidden bg-gradient-to-r ${skill.color} p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="flex items-center gap-3 text-white">
                          <skill.icon className="w-6 h-6" />
                          <span className="font-semibold text-sm">{skill.name}</span>
                        </div>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Backend Technologies */}
                <motion.div variants={fadeInUp} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
                      <FaServer className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Backend & APIs</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Node.js', icon: SiNodedotjs, desc: 'Server-side JavaScript runtime', color: 'from-green-500 to-green-600' },
                      { name: 'Express.js', icon: SiNodedotjs, desc: 'Web application framework', color: 'from-gray-600 to-gray-800' },
                      { name: 'Nest.js', icon: SiNodedotjs, desc: 'Enterprise Node.js framework', color: 'from-red-500 to-pink-600' },
                      { name: 'PHP & Laravel', icon: SiPhp, desc: 'Web development & framework', color: 'from-indigo-500 to-purple-600' }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="group bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02, x: -5 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}>
                            <skill.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Databases & Tools */}
                <motion.div variants={fadeInUp} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Databases & DevOps</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: 'MongoDB', icon: SiMongodb, type: 'NoSQL Database', color: 'from-green-500 to-green-600' },
                      { name: 'PostgreSQL', icon: SiPostgresql, type: 'Relational Database', color: 'from-blue-600 to-indigo-600' },
                      { name: 'Firebase', icon: SiFirebase, type: 'Backend as a Service', color: 'from-yellow-500 to-orange-500' },
                      { name: 'ViciDial', icon: FaPhone, type: 'Call Center Platform', color: 'from-emerald-500 to-teal-600' },
                      { name: 'Git & GitHub', icon: SiGithub, type: 'Version Control', color: 'from-gray-700 to-gray-900' }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="group flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}>
                            <skill.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{skill.type}</p>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Expertise Section - Enhanced */}
        <motion.section 
          id="expertise"
          className="mb-24"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-white via-cyan-50 to-blue-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-12 border border-cyan-100 dark:border-gray-600 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-12">
                <motion.div
                  className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    Core Expertise & Specializations
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* React Native Expertise */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <SiReact className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">React Native Expert</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">Cross-Platform Mobile Development</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { title: 'Enterprise Mobile Apps', desc: 'Built 15+ production apps for Fortune 500 companies', icon: FaMobile },
                        { title: 'Performance Optimization', desc: '40% faster load times through advanced optimization', icon: Globe },
                        { title: 'Native Module Integration', desc: 'Custom native modules for iOS and Android platforms', icon: Code },
                        { title: 'State Management', desc: 'Redux, Context API, and Zustand implementation', icon: SiRedux },
                        { title: 'Real-time Features', desc: 'WebSocket, Firebase, and push notification systems', icon: Mail }
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-700/50"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                        >
                          <div className="p-2 bg-blue-500 rounded-lg">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* ViciDial Expertise */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative group bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaPhone className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">ViciDial Specialist</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">Enterprise Call Center Solutions</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { title: 'Enterprise Deployments', desc: 'Deployed systems handling 10,000+ daily calls', icon: FaServer },
                        { title: 'Custom Integrations', desc: 'CRM, API, and third-party service integrations', icon: Database },
                        { title: 'Performance Tuning', desc: 'Optimized for high-volume call center operations', icon: Globe },
                        { title: 'Multi-server Clustering', desc: 'High-availability and load-balanced setups', icon: Award },
                        { title: 'Real-time Analytics', desc: 'Custom dashboards and reporting systems', icon: Code }
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-emerald-200/50 dark:border-emerald-700/50"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          whileHover={{ x: -5, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                        >
                          <div className="p-2 bg-emerald-500 rounded-lg">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Integration & Solutions */}
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <SiReact className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Full-Stack Integration Solutions</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">End-to-End Development Expertise</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Mobile-Web Sync',
                      desc: 'Seamless data synchronization between React Native apps and web platforms',
                      icon: FaMobile,
                      color: 'from-blue-500 to-cyan-500'
                    },
                    {
                      title: 'API Architecture',
                      desc: 'RESTful and GraphQL APIs with real-time capabilities and microservices',
                      icon: FaServer,
                      color: 'from-green-500 to-emerald-500'
                    },
                    {
                      title: 'Enterprise Solutions',
                      desc: 'Scalable systems for call centers, CRM integration, and workflow automation',
                      icon: Briefcase,
                      color: 'from-purple-500 to-indigo-500'
                    }
                  ].map((solution, index) => (
                    <motion.div
                      key={solution.title}
                      className="group text-center p-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{solution.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{solution.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* React Showcase Section */}
        <motion.section 
          id="react-showcase"
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Animated React Logo Background */}
            <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
              <SiReact className="w-32 h-32 text-blue-500 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <motion.div
                className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <SiReact className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">React Ecosystem Mastery</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {/* React Web */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <SiReact className="w-8 h-8 text-cyan-500" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">React Web</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <SiNextdotjs className="w-4 h-4 text-gray-800 dark:text-gray-300" />
                    Next.js 13+ with App Router
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTypescript className="w-4 h-4 text-blue-600" />
                    TypeScript Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTailwindcss className="w-4 h-4 text-cyan-500" />
                    Tailwind CSS Styling
                  </li>
                </ul>
              </motion.div>

              {/* React Native */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaMobile className="w-8 h-8 text-blue-500" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">React Native</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaReact className="w-4 h-4 text-cyan-500" />
                    Cross-platform Mobile Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <SiRedux className="w-4 h-4 text-purple-600" />
                    Redux State Management
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-500" />
                    Native Module Integration
                  </li>
                </ul>
              </motion.div>

              {/* React Ecosystem */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-purple-500" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">React Tools</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-orange-500" />
                    React Query/TanStack
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-500" />
                    React Hook Form
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    Testing Library & Jest
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* React Stats */}
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-xl border border-cyan-200 dark:border-cyan-800 relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <SiReact className="w-6 h-6 text-cyan-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">3+</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years React Experience</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <FaMobile className="w-6 h-6 text-blue-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">15+</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mobile Apps Built</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <SiNextdotjs className="w-6 h-6 text-gray-800 dark:text-gray-300 mr-2" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">20+</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Web Applications</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-yellow-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">100%</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-purple-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FolderOpen className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Projects</h2>
            </div>
            <div className="grid gap-8">
              {[
                {
                  title: "ViciDial Call Center Management System",
                  url: "#",
                  tech: "ViciDial, Asterisk, MySQL, PHP, Linux",
                  description: [
                    "Implemented complete ViciDial solution for enterprise call center with 100+ agents and multi-campaign management",
                    "Developed custom reporting dashboards, real-time monitoring, and automated lead distribution systems with CRM integration"
                  ],
                  gradient: "from-emerald-500 to-teal-500",
                  isPrivate: true
                },
                {
                  title: "Cross-Platform Mobile Banking App",
                  url: "#",
                  tech: "React Native, Redux, Firebase, Biometric Auth",
                  description: [
                    "Built secure mobile banking application with biometric authentication, real-time transactions, and offline capabilities",
                    "Implemented push notifications, deep linking, and seamless integration with banking APIs for iOS and Android platforms"
                  ],
                  gradient: "from-blue-500 to-indigo-500",
                  isPrivate: true
                },
                {
                  title: "M-eState Housing Society Management",
                  url: "https://mestate.must.services/login",
                  tech: "Next.js, Nest.js, PostgreSQL",
                  description: [
                    "Developed a comprehensive housing society management system with role-based access control for residents, management, and administrators",
                    "Implemented features for property management, maintenance requests, billing systems, and community announcements with real-time notifications"
                  ],
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "React Native E-Commerce Mobile App",
                  url: "#",
                  tech: "React Native, Redux Toolkit, Stripe, Push Notifications",
                  description: [
                    "Developed full-featured e-commerce mobile app with product catalog, shopping cart, secure payments, and order tracking",
                    "Integrated real-time inventory management, push notifications for order updates, and seamless checkout experience"
                  ],
                  gradient: "from-purple-500 to-pink-500",
                  isPrivate: true
                },
                {
                  title: "RADZ Admin Dashboard Portal",
                  url: "https://rdaz-admin-dashboard.vercel.app/",
                  tech: "Next.js, ShadCN UI, Chart.js, TypeScript",
                  description: [
                    "Built a sophisticated admin dashboard with comprehensive analytics and campaign management capabilities for marketing operations",
                    "Integrated interactive data visualizations, performance metrics tracking, and user management systems with responsive design"
                  ],
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "ViciDial Custom Agent Interface",
                  url: "#",
                  tech: "PHP, JavaScript, MySQL, WebRTC, Asterisk",
                  description: [
                    "Created custom agent interface for ViciDial with enhanced UI/UX, real-time call controls, and integrated CRM functionality",
                    "Implemented advanced call routing, disposition management, and performance analytics with WebRTC integration"
                  ],
                  gradient: "from-green-500 to-emerald-500",
                  isPrivate: true
                },
                {
                  title: "Advanced Admin Dashboard Portal",
                  url: "https://admin-dashboard-shadcn.vercel.app/",
                  tech: "Next.js, Shadcn UI, TypeScript",
                  description: [
                    "Built modern admin interface with Shadcn UI, analytics, dark mode, charts"
                  ],
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  title: "Task Management With Video Call",
                  url: "https://task-management-with-video-call.vercel.app/",
                  tech: "React.js, WebRTC",
                  description: [
                    "Developed dashboards with task workflows, real-time chat, and video collaboration"
                  ],
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp} 
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                        {project.title}
                        {project.isPrivate && (
                          <span className="ml-2 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                            Private Project
                          </span>
                        )}
                      </h3>
                      {!project.isPrivate ? (
                        <motion.a 
                          href={project.url}
                          className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </motion.a>
                      ) : (
                        <div className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} opacity-60 text-white rounded-full text-sm font-medium`}>
                          <Code className="w-4 h-4" />
                          Confidential
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">{project.tech}</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      {project.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          id="certifications"
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-emerald-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Certifications</h2>
            </div>
            <div className="space-y-6">
              <motion.div 
                variants={fadeInUp} 
                className="relative pl-8 pb-6 border-l-4 border-gradient-to-b from-emerald-500 to-teal-500 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-r-xl p-6 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full shadow-lg"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Developing Front-End Apps with React</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium">April 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">IBM</p>
                <motion.a 
                  href="https://coursera.org/verify/PGS8NVNDM6UN"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </motion.a>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                className="relative pl-8 pb-6 border-l-4 border-gradient-to-b from-teal-500 to-cyan-500 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-r-xl p-6 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full shadow-lg"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Getting Started with Git and GitHub</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-medium">June 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">IBM</p>
                <motion.a 
                  href="https://coursera.org/verify/L7HMA72GX8DU"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Get In Touch</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Let&apos;s Connect</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                      <a href="mailto:rizwan.abdullah193@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        rizwan.abdullah193@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Phone</p>
                      <a href="tel:+923308067161" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                        +92 330 8067161
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Islamabad, Pakistan</p>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg">
                      <SiGithub className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">GitHub</p>
                      <a href="https://github.com/rizwanabdullah11" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                        @rizwanabdullah11
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                      <SiLinkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/rizwan-abdullah-804208232/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        Connect with me
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md"
                      placeholder="Your Name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md"
                      placeholder="What's this about?"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 Rizwan Abdullah. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/rizwanabdullah11" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rizwan-abdullah-804208232/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:rizwan.abdullah193@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}