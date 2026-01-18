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
  Briefcase,
  GraduationCap,
  FolderOpen
} from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navigation />
      
      {/* Header Section */}
      <motion.header 
        id="home"
        className="bg-gradient-to-r from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl pt-20 relative overflow-hidden transition-colors duration-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
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
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
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
        <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="text-center">
            <motion.div
              className="mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">RA</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              Rizwan Abdullah
            </motion.h1>
            
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Full Stack Web Developer
              </p>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 dark:text-gray-300"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                { icon: Phone, text: "+923308067161", href: "tel:+923308067161" },
                { icon: MapPin, text: "Islamabad", href: null },
                { icon: Mail, text: "rizwan.abdullah193@gmail.com", href: "mailto:rizwan.abdullah193@gmail.com" },
                { icon: Github, text: "GitHub", href: "https://github.com/rizwanabdullah11" },
                { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/rizwan-abdullah-804208232/" },
                { icon: Globe, text: "Portfolio", href: "https://rizwan-abdullah-portfolio.vercel.app/" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-medium">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Summary Section */}
        <motion.section 
          id="summary"
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
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <User className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Summary</h2>
            </div>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Full Stack Web Developer specializing in React Native mobile development and ViciDial call center solutions. 
              Expert in creating cross-platform mobile applications and implementing advanced telephony systems with 
              experience in all stages of the development life cycle.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-indigo-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Experience</h2>
            </div>
            <div className="space-y-8">
              <motion.div 
                variants={fadeInUp} 
                className="relative pl-8 pb-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-r-xl p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Junior Software Developer</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">May 2025 -- Present</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-2">MUST Pvt Ltd, MGC Complex G8 Markaz, Islamabad, Pakistan</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                className="relative pl-8 pb-8 border-l-4 border-gradient-to-b from-indigo-500 to-pink-500 bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-r-xl p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full shadow-lg"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Junior Software Engineer (Remote)</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full text-sm font-medium">February 2025 -- April 2025</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-2">DragSense, Islamabad, Pakistan</p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                className="relative pl-8 pb-8 border-l-4 border-gradient-to-b from-purple-500 to-blue-500 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-r-xl p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Web Developer</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium">November 2024 -- January 2025</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-2">iOPTIME Pvt Ltd, G8 Markaz, Islamabad, Pakistan</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education"
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-yellow-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Education</h2>
            </div>
            <motion.div 
              className="relative pl-8 pb-6 border-l-4 border-gradient-to-b from-yellow-500 to-orange-500 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-r-xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ x: 10 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-lg"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Bachelor of Computer Science</h3>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-medium">2020 - 2024</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">Air University, Islamabad, Pakistan</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-green-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'TypeScript', 'C++', 'Python', 'Dart'].map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  Frontend & Mobile Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['HTML5', 'CSS3', 'React.js', 'Next.js', 'React Native', 'Redux.js', 'Tailwind CSS', 'Shadcn UI', 'Leaflet.js', 'Expo', 'React Navigation'].map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  Backend Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Express.js', 'Nest.js', 'PHP', 'Laravel', 'Puppeteer.js'].map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  Databases, Tools & Telephony
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'GitHub', 'ViciDial', 'Asterisk', 'FreePBX', 'Zendesk', 'WhatsApp API', 'n8n', 'WebRTC'].map((skill, index) => (
                    <motion.span 
                      key={skill} 
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section 
          id="expertise"
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border border-cyan-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Core Expertise</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* React Native Expertise */}
              <motion.div 
                variants={fadeInUp}
                className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-md">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">React Native Expert</h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Cross-platform mobile app development for iOS and Android
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Native module integration and custom component development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Performance optimization and memory management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Redux state management and navigation systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    Push notifications, deep linking, and offline functionality
                  </li>
                </ul>
              </motion.div>

              {/* ViciDial Expertise */}
              <motion.div 
                variants={fadeInUp}
                className="relative p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">ViciDial Specialist</h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    Complete ViciDial installation, configuration, and optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    Custom dialer campaigns and lead management systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    Asterisk PBX integration and telephony solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    Call center reporting, analytics, and performance monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    Multi-server clustering and high-availability setups
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Additional Expertise */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-md">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Integration & Solutions</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Mobile-Web Integration</h4>
                  <p className="text-sm">Seamless integration between React Native apps and web platforms, API development, and real-time synchronization.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Call Center Solutions</h4>
                  <p className="text-sm">End-to-end call center implementations with CRM integration, automated workflows, and custom reporting dashboards.</p>
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Let's Connect</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
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