'use client';

import { motion } from 'framer-motion';
import { Code, Database } from 'lucide-react';
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

export default function Skills() {
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
      id="skills"
      className="mb-24"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-white via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-cyan-100 dark:border-gray-600 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <motion.div
              className="p-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Technical Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
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
  );
}