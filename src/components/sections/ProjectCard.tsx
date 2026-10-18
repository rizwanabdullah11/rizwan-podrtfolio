'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { Project } from '@/data/types';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="group relative h-full flex flex-col justify-between bg-gray-50 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
        <div>
          {/* Top row: Category Badge & Status */}
          <div className="flex items-center justify-between gap-3 mb-4">
            {project.category ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600">
                {project.category}
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-black">
                {project.type === 'mobile' ? 'Mobile App' : 'Web App'}
              </span>
            )}

            {project.isPrivate ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                <Code className="w-3 h-3 text-orange-500" />
                Confidential
              </span>
            ) : project.url ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live Project
              </span>
            ) : null}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.split(',').map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-white text-black shadow-2xs"
              >
                {t.trim()}
              </span>
            ))}
          </div>

          {/* Bullet points */}
          <ul className="space-y-2.5 mb-6 text-sm text-black leading-relaxed">
            {project.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button at bottom */}
        {!project.isPrivate && project.url ? (
          <div className="pt-2">
            <Button
              href={project.url}
              variant="primary"
              size="sm"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Visit Live Website
            </Button>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}