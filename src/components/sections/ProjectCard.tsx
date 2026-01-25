'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { Project } from '@/data/types';
import Button from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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
          
          {!project.isPrivate && project.url ? (
            <Button
              href={project.url}
              variant="primary"
              size="sm"
              icon={<ExternalLink className="w-4 h-4" />}
              className={`bg-gradient-to-r ${project.gradient}`}
            >
              View Project
            </Button>
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
  );
}