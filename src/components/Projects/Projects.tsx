'use client';

import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';
import SectionHeader from '@/components/ui/SectionHeader';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Projects() {
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
        className="relative bg-gradient-to-br from-white via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-12 border border-purple-100 dark:border-gray-600 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5 }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <SectionHeader
            icon={<FolderOpen className="w-8 h-8 text-white" />}
            title="Featured Projects"
            iconGradient="from-purple-500 to-indigo-600"
          />
          
          <div className="grid gap-8 mt-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
