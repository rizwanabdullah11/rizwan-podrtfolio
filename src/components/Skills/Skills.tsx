'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Shield } from 'lucide-react';
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
      className="mb-24 scroll-mt-28"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div 
        className="relative bg-white py-4 overflow-hidden"
      >
        {/* Background Soft Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <motion.div
              className="p-4 bg-orange-500 rounded-2xl "
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500 mb-2">
                Technical Expertise
              </h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                  <SiReact className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'JavaScript', icon: SiJavascript, level: 95 },
                  { name: 'TypeScript', icon: SiTypescript, level: 90 },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group bg-gray-50 rounded-xl p-4 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-6 h-6 text-black group-hover:text-orange-500 transition-colors" />
                        <span className="font-semibold text-black group-hover:text-orange-500 transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-orange-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-orange-500 rounded-full"
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
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                  <FaMobile className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Frontend & Mobile</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Next.js (App Router)', icon: SiNextdotjs },
                  { name: 'React.js', icon: SiReact },
                  { name: 'Technical SEO', icon: Globe },
                  { name: 'Tailwind & ShadCN', icon: SiTailwindcss },
                  { name: 'React Native', icon: FaReact },
                  { name: 'TypeScript', icon: SiTypescript },
                  { name: 'Redux Toolkit', icon: SiRedux },
                  { name: 'RBAC & Auth', icon: Shield }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group bg-gray-50 p-4 rounded-xl transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="flex items-center gap-3 text-black group-hover:text-orange-500 transition-colors">
                      <skill.icon className="w-6 h-6 text-orange-500" />
                      <span className="font-semibold text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Technologies */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                  <FaServer className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Backend & APIs</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Node.js', icon: SiNodedotjs, desc: 'Server-side JavaScript runtime' },
                  { name: 'Express.js', icon: SiNodedotjs, desc: 'Web application framework' },
                  { name: 'Nest.js', icon: SiNodedotjs, desc: 'Enterprise Node.js framework' },
                  { name: 'PHP & Laravel', icon: SiPhp, desc: 'Web development & framework' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group bg-gray-50 rounded-xl p-4 transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">{skill.name}</h4>
                        <p className="text-sm text-gray-600">{skill.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Databases & Tools */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500">Databases & DevOps</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'MongoDB', icon: SiMongodb, type: 'NoSQL Database' },
                  { name: 'PostgreSQL', icon: SiPostgresql, type: 'Relational Database' },
                  { name: 'Firebase', icon: SiFirebase, type: 'Backend as a Service' },
                  { name: 'ViciDial', icon: FaPhone, type: 'Call Center Platform' },
                  { name: 'Git & GitHub', icon: SiGithub, type: 'Version Control' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black group-hover:text-orange-500 transition-colors">{skill.name}</h4>
                        <p className="text-xs text-gray-500">{skill.type}</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}