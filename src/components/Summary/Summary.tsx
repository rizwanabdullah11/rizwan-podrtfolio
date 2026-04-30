'use client';

import { motion } from 'framer-motion';
import { User, Smartphone, Globe, Code2, Zap, Shield, GitBranch } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const techStack = [
  { name: 'React Native', icon: FaReact,        color: 'text-cyan-500',   bg: 'bg-cyan-500/10'   },
  { name: 'Next.js',      icon: SiNextdotjs,    color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-500/10' },
  { name: 'React.js',     icon: SiReact,        color: 'text-cyan-400',   bg: 'bg-cyan-400/10'   },
  { name: 'TypeScript',   icon: SiTypescript,   color: 'text-blue-500',   bg: 'bg-blue-500/10'   },
  { name: 'JavaScript',   icon: SiJavascript,   color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { name: 'Node.js',      icon: SiNodedotjs,    color: 'text-green-500',  bg: 'bg-green-500/10'  },
  { name: 'PostgreSQL',   icon: SiPostgresql,   color: 'text-blue-600',   bg: 'bg-blue-600/10'   },
  { name: 'MongoDB',      icon: SiMongodb,      color: 'text-green-600',  bg: 'bg-green-600/10'  },
  { name: 'Firebase',     icon: SiFirebase,     color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { name: 'Redux',        icon: SiRedux,        color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { name: 'Tailwind CSS', icon: SiTailwindcss,  color: 'text-teal-400',   bg: 'bg-teal-400/10'   },
];

const highlights = [
  { icon: Smartphone, label: 'Mobile Dev',       value: 'React Native',    color: 'from-cyan-500 to-blue-500'     },
  { icon: Globe,      label: 'Web Dev',           value: 'Next.js & React', color: 'from-emerald-500 to-teal-500'  },
  { icon: Zap,        label: 'Experience',        value: '1+ Years',        color: 'from-yellow-500 to-orange-500' },
  { icon: Code2,      label: 'Apps Delivered',    value: '10+',             color: 'from-purple-500 to-indigo-500' },
  { icon: Shield,     label: 'Code Quality',      value: 'Best Practices',  color: 'from-teal-500 to-emerald-500'  },
  { icon: GitBranch,  label: 'Version Control',   value: 'Git & GitHub',    color: 'from-gray-600 to-gray-800'     },
];

export default function Summary() {
  return (
    <motion.section
      id="summary"
      className="mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-white via-teal-50 to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-teal-100 dark:border-gray-600 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-5 mb-10">
            <motion.div
              className="p-4 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl shadow-lg flex-shrink-0"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* ── LEFT: Bio (~500 words) ── */}
            <motion.div
              className="space-y-5 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg leading-relaxed">
                Hi, I&apos;m <span className="font-semibold text-teal-600 dark:text-teal-400">Rizwan Abdullah</span> — a Software Engineer based in Islamabad, Pakistan, with <span className="font-semibold text-teal-600 dark:text-teal-400">1+ years of professional experience</span> building mobile and web applications that are fast, scalable, and user-friendly.
              </p>

              <p className="text-base leading-relaxed">
                My primary focus is <span className="font-medium text-gray-900 dark:text-gray-100">React Native</span> for cross-platform mobile development. I enjoy crafting smooth, native-feeling experiences for both iOS and Android — from authentication flows and real-time features to offline support and push notifications. I care deeply about performance and making sure every interaction feels polished.
              </p>

              <p className="text-base leading-relaxed">
                On the web side, I work with <span className="font-medium text-gray-900 dark:text-gray-100">Next.js</span> and <span className="font-medium text-gray-900 dark:text-gray-100">React.js</span> to build modern, responsive applications. Whether it&apos;s a complex admin dashboard, a management system with role-based access, or a real-time collaborative tool, I focus on clean architecture and maintainable code that scales.
              </p>

              <p className="text-base leading-relaxed">
                I&apos;m comfortable across the full stack — using <span className="font-medium text-gray-900 dark:text-gray-100">Node.js</span>, <span className="font-medium text-gray-900 dark:text-gray-100">PostgreSQL</span>, <span className="font-medium text-gray-900 dark:text-gray-100">MongoDB</span>, and <span className="font-medium text-gray-900 dark:text-gray-100">Firebase</span> on the backend. I write TypeScript by default, use Redux for state management, and keep my UIs consistent with Tailwind CSS and component libraries like ShadCN UI.
              </p>

              <p className="text-base leading-relaxed">
                Over the past year I&apos;ve worked across different environments — from a remote role at <span className="font-medium text-gray-900 dark:text-gray-100">DragSense</span> where I built cross-platform mobile apps and integrated real-time WebSocket features, to <span className="font-medium text-gray-900 dark:text-gray-100">iOPTIME</span> where I delivered full-stack web solutions, and currently at <span className="font-medium text-gray-900 dark:text-gray-100">MUST Pvt Ltd</span> where I&apos;m leading React Native development and contributing to enterprise-grade products.
              </p>

              <p className="text-base leading-relaxed">
                I believe good software is more than working code — it&apos;s readable, testable, and built with the next developer in mind. I follow clean code principles, use Git workflows properly, and always think about edge cases and error handling before shipping.
              </p>

              <p className="text-base leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new tools, keeping up with the React and React Native ecosystem, and looking for ways to improve the products I work on. I&apos;m always open to interesting projects and collaborations — feel free to reach out.
              </p>
            </motion.div>

            {/* ── RIGHT: Technical Side ── */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Quick stats */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                  At a Glance
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-700/50 rounded-xl border border-gray-200/60 dark:border-gray-600/50 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.label}</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${tech.bg} border border-gray-200/50 dark:border-gray-600/50`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <tech.icon className={`w-4 h-4 ${tech.color}`} />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* What I build */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                  What I Build
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: '📱', title: 'Mobile Apps',  desc: 'Cross-platform iOS & Android with React Native' },
                    { icon: '🌐', title: 'Web Apps',     desc: 'Full-stack apps with Next.js & React.js'       },
                    { icon: '⚙️', title: 'Backend APIs', desc: 'REST APIs with Node.js, PostgreSQL & MongoDB'  },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-3 p-3 bg-white/40 dark:bg-gray-700/30 rounded-xl border border-gray-200/40 dark:border-gray-600/30"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xl leading-none mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
