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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="group relative overflow-hidden bg-white dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {project.title}
              </CardTitle>
              {project.isPrivate && (
                <Badge variant="secondary" className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                  Private Project
                </Badge>
              )}
            </div>
            
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
              <Badge className={`bg-gradient-to-r ${project.gradient} opacity-60 text-white`}>
                <Code className="w-4 h-4 mr-2" />
                Confidential
              </Badge>
            )}
          </div>
          
          <CardDescription className="font-medium mt-2">{project.tech}</CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <ul className="space-y-2">
            {project.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></span>
                {desc}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}