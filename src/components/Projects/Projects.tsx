'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderOpen, Smartphone, Globe, Zap } from 'lucide-react';
import { projects, getMobileProjects, getWebProjects, getSEOProjects } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tabs = [
  { id: 'all',    label: 'All Projects',  icon: FolderOpen, tech: 'All Web, SEO & Mobile Applications' },
  { id: 'seo',    label: 'SEO Platforms', icon: Zap,        tech: 'Live Commercial SEO Websites' },
  { id: 'web',    label: 'Web & RBAC',    icon: Globe,      tech: 'Next.js & Enterprise RBAC Portals' },
  { id: 'mobile', label: 'Mobile Apps',   icon: Smartphone, tech: 'React Native Cross-Platform Apps' },
] as const;

type TabId = typeof tabs[number]['id'];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabId>('all');

  const allProjects    = projects;
  const seoProjects    = getSEOProjects();
  const webProjects    = getWebProjects();
  const mobileProjects = getMobileProjects();

  const displayedProjects = 
    activeTab === 'seo' ? seoProjects :
    activeTab === 'mobile' ? mobileProjects :
    activeTab === 'web' ? webProjects :
    allProjects;

  const getTabCount = (id: TabId) => {
    switch (id) {
      case 'all': return allProjects.length;
      case 'seo': return seoProjects.length;
      case 'web': return webProjects.length;
      case 'mobile': return mobileProjects.length;
    }
  };

  return (
    <motion.section
      id="projects"
      className="mb-24 scroll-mt-28"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="relative bg-white py-4 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-start gap-5 mb-8">
            <motion.div
              className="p-4 bg-orange-500 rounded-2xl shadow-orange-500/25 flex-shrink-0"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <FolderOpen className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full" />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2.5 mt-8 mb-4 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-colors duration-200 ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {getTabCount(tab.id)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Description */}
          <p className="text-xs text-gray-500 mb-8 pl-1">
            {tabs.find(t => t.id === activeTab)?.tech}
          </p>

          {/* Projects Grid: Responsive 2-column layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
