'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderOpen, Smartphone, Globe } from 'lucide-react';
import { getMobileProjects, getWebProjects } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';
import SectionHeader from '@/components/ui/SectionHeader';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tabs = [
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone, tech: 'React Native' },
  { id: 'web',    label: 'Web Apps',    icon: Globe,       tech: 'Next.js & React.js' },
] as const;

type TabId = typeof tabs[number]['id'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabId>('mobile');

  const mobileProjects = getMobileProjects();
  const webProjects    = getWebProjects();
  const displayedProjects = activeTab === 'mobile' ? mobileProjects : webProjects;

  return (
    <motion.section
      id="projects"
      className="mb-24"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-white via-emerald-50 to-cyan-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-emerald-100 dark:border-gray-600 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5 }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-full blur-2xl" />

        <div className="relative z-10">
          <SectionHeader
            icon={<FolderOpen className="w-8 h-8 text-white" />}
            title="Projects"
            iconGradient="from-emerald-500 to-cyan-600"
          />

          {/* Tabs */}
          <div className="flex gap-3 mt-8 mb-8 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                  }`}>
                    {tab.id === 'mobile' ? mobileProjects.length : webProjects.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tech subtitle */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 -mt-4">
            {tabs.find(t => t.id === activeTab)?.tech}
          </p>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8"
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
}
