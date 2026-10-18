'use client';

import { motion } from 'framer-motion';
import { User, Smartphone, Globe, Zap } from 'lucide-react';

const highlights = [
  { icon: Zap,        label: 'Experience',       value: '2+ Years' },
  { icon: Globe,      label: 'Web & Enterprise', value: 'Next.js & RBAC Portals' },
  { icon: Zap,        label: 'Search Optimization', value: 'Technical & Local SEO' },
  { icon: Smartphone, label: 'Mobile Apps',      value: 'React Native' },
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
      <div
        className="relative bg-white py-4 overflow-hidden"
      >
        {/* Soft Orange Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

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
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                About Me
              </h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full" />
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* ── LEFT: Bio (~500 words) ── */}
            <motion.div
              className="space-y-5 text-black"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg leading-relaxed">
                Hi, I&apos;m <span className="font-semibold text-orange-500">Rizwan Abdullah</span> — a Software Engineer and SEO Expert based in Islamabad with <span className="font-semibold text-orange-500">2+ years of professional experience</span> building high-performance web applications and scalable enterprise systems.
              </p>

              <p className="text-base leading-relaxed">
                My primary expertise centers around <span className="font-medium text-black">Next.js (App Router)</span>, TypeScript, and modern UI architectures with Tailwind CSS and <span className="font-medium text-black">shadcn/ui</span>. Beyond engineering clean frontends, I specialize in <span className="font-semibold text-orange-500">Technical & Local SEO</span> — optimizing live commercial websites for top search visibility, Core Web Vitals, and conversions.
              </p>

              <p className="text-base leading-relaxed">
                I also architect complex enterprise solutions with multi-tier <span className="font-semibold text-orange-500">Role-Based Access Control (RBAC)</span> for Admin, Organization, Staff, and Auditor workflows, alongside cross-platform mobile apps with <span className="font-medium text-black">React Native</span> and robust backend APIs with <span className="font-medium text-black">Node.js, PostgreSQL, and MongoDB</span>.
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
                <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">
                  At a Glance
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
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
                        <p className="text-xs text-gray-500 truncate">{item.label}</p>
                        <p className="text-sm font-semibold text-orange-500 group-hover:text-orange-600 transition-colors truncate">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


              {/* What I build */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">
                  What I Build
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: '🌐', title: 'Web Apps & RBAC Portals',  desc: 'Next.js (App Router), Tailwind & shadcn/ui with granular role-based permissions' },
                    { icon: '🚀', title: 'Technical & Local SEO',    desc: 'Keyword strategy, schema markup, Core Web Vitals & organic ranking' },
                    { icon: '📱', title: 'Mobile & APIs',            desc: 'Cross-platform iOS & Android with React Native and Node.js/PostgreSQL backends' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xl leading-none mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-orange-500 group-hover:text-orange-600 transition-colors text-sm">{item.title}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
