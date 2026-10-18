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
  { name: 'Next.js',      icon: SiNextdotjs,    color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-500/10' },
  { name: 'React.js',     icon: SiReact,        color: 'text-cyan-400',   bg: 'bg-cyan-400/10'   },
  { name: 'React Native', icon: FaReact,        color: 'text-cyan-500',   bg: 'bg-cyan-500/10'   },
  { name: 'TypeScript',   icon: SiTypescript,   color: 'text-blue-500',   bg: 'bg-blue-500/10'   },
  { name: 'JavaScript',   icon: SiJavascript,   color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { name: 'Node.js',      icon: SiNodedotjs,    color: 'text-green-500',  bg: 'bg-green-500/10'  },
  { name: 'PostgreSQL',   icon: SiPostgresql,   color: 'text-blue-600',   bg: 'bg-blue-600/10'   },
  { name: 'MongoDB',      icon: SiMongodb,      color: 'text-green-600',  bg: 'bg-green-600/10'  },
  { name: 'Firebase',     icon: SiFirebase,     color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { name: 'Tailwind CSS', icon: SiTailwindcss,  color: 'text-teal-400',   bg: 'bg-teal-400/10'   },
  { name: 'SEO & Performance', icon: Globe,      color: 'text-emerald-500',bg: 'bg-emerald-500/10' },
];

const highlights = [
  { icon: Globe,      label: 'Web & Enterprise', value: 'Next.js & RBAC Portals', color: 'from-emerald-500 to-teal-500'  },
  { icon: Zap,        label: 'Search Optimization', value: 'Technical & Local SEO', color: 'from-cyan-500 to-emerald-500' },
  { icon: Smartphone, label: 'Mobile Apps',      value: 'React Native',       color: 'from-cyan-500 to-blue-500'     },
  { icon: Zap,        label: 'Experience',       value: '1+ Years',           color: 'from-yellow-500 to-orange-500' },
  { icon: Code2,      label: 'Apps Delivered',   value: '12+',                color: 'from-purple-500 to-indigo-500' },
  { icon: Shield,     label: 'Code Quality',     value: 'Best Practices & RBAC', color: 'from-teal-500 to-emerald-500'  },
  { icon: GitBranch,  label: 'Version Control',  value: 'Git & GitHub',       color: 'from-gray-600 to-gray-800'     },
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
        className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Soft Orange Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-5 mb-10">
            <motion.div
              className="p-4 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/25 flex-shrink-0"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                About Me
              </h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full" />
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
                Hi, I&apos;m <span className="font-semibold text-orange-500">Rizwan Abdullah</span> — a Software Engineer based in Islamabad, Pakistan, with <span className="font-semibold text-orange-500">1+ years of professional experience</span> building web applications that are fast, scalable, and user-friendly — with mobile work when the product calls for it.
              </p>

              <p className="text-base leading-relaxed">
                My main focus is <span className="font-medium text-gray-900 dark:text-gray-100">Next.js</span> and the modern React ecosystem: App Router, server and client components, and polished UI with Tailwind and <span className="font-medium text-gray-900 dark:text-gray-100">shadcn/ui</span>. Beyond interface design, I specialize in <span className="font-semibold text-orange-500">Search Engine Optimization (SEO)</span> — having implemented full technical and local SEO strategies across multiple live commercial websites to drive organic search visibility, Core Web Vitals performance, and high conversion rates.
              </p>

              <p className="text-base leading-relaxed">
                I also architect complex enterprise web applications — including multi-tier management portals with granular <span className="font-semibold text-orange-500">Role-Based Access Control (RBAC)</span> supporting Organization, Employee, Auditor, and Admin workflows (such as ISSO compliance platforms and business suites).
              </p>

              <p className="text-base leading-relaxed">
                I also build with <span className="font-medium text-gray-900 dark:text-gray-100">React.js</span> more broadly, and <span className="font-medium text-gray-900 dark:text-gray-100">React Native</span> for cross-platform mobile — smooth flows, solid state management, and features that work reliably on iOS and Android.
              </p>

              <p className="text-base leading-relaxed">
                I&apos;m comfortable across the full stack — using <span className="font-medium text-gray-900 dark:text-gray-100">Node.js</span>, <span className="font-medium text-gray-900 dark:text-gray-100">PostgreSQL</span>, <span className="font-medium text-gray-900 dark:text-gray-100">MongoDB</span>, and <span className="font-medium text-gray-900 dark:text-gray-100">Firebase</span> on the backend. I write TypeScript by default, use Redux for state management, and keep my UIs consistent with Tailwind CSS and component libraries like ShadCN UI.
              </p>

              <p className="text-base leading-relaxed">
                Over the past year I&apos;ve worked across different stacks — <span className="font-medium text-gray-900 dark:text-gray-100">DragSense</span> (Next.js, Tailwind, Node.js), <span className="font-medium text-gray-900 dark:text-gray-100">iOPTIME</span> as an intern (React, Laravel, Tailwind), and currently <span className="font-medium text-gray-900 dark:text-gray-100">MUST Pvt Ltd</span> where I ship Next.js and shadcn-powered web work alongside React Native when needed.
              </p>

              <p className="text-base leading-relaxed">
                I believe good software is more than working code — it&apos;s readable, testable, and built with the next developer in mind. I follow clean code principles, use Git workflows properly, and always think about edge cases and error handling before shipping.
              </p>

              <p className="text-base leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new tools, keeping up with Next.js and the wider React ecosystem, and looking for ways to improve the products I work on. I&apos;m always open to interesting projects and collaborations — feel free to reach out.
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
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700/60 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-orange-500 hover:shadow-md transition-all duration-300 group"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors flex-shrink-0">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.label}</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-500 transition-colors truncate">{item.value}</p>
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
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-500 dark:hover:text-orange-400 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <tech.icon className="w-4 h-4 text-orange-500" />
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
                    { icon: '🌐', title: 'Web Apps & Portals',  desc: 'Next.js, React, Tailwind & shadcn/ui — my main focus' },
                    { icon: '🚀', title: 'SEO Optimization',    desc: 'Technical SEO, schema markup, Core Web Vitals & organic rankings' },
                    { icon: '🏢', title: 'Role-Based Panels',   desc: 'ISSO-style RBAC architectures for Admin, Organization, Staff & Auditors' },
                    { icon: '📱', title: 'Mobile Apps',         desc: 'Cross-platform iOS & Android with React Native' },
                    { icon: '⚙️', title: 'Backend APIs',        desc: 'REST APIs with Node.js, PostgreSQL & MongoDB'  },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-orange-500 hover:shadow-md transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xl leading-none mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-500 transition-colors text-sm">{item.title}</p>
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
