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
  const [activeTab, setActiveTab] = useState<TabId>('web');

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
      <div
        className="relative bg-white py-4 overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <SectionHeader
            icon={<FolderOpen className="w-8 h-8 text-white" />}
            title="Projects"
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
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                      : 'bg-gray-100 text-black hover:text-orange-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-gray-200 text-black'
                  }`}>
                    {tab.id === 'mobile' ? mobileProjects.length : webProjects.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tech subtitle */}
          <p className="text-sm text-gray-500 mb-6 -mt-4">
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
      </div>
    </motion.section>
  );
}
