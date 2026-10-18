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
      <Card className="group relative overflow-hidden bg-gray-50 border-0 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 text-black group-hover:text-orange-500 transition-colors">
                {project.title}
              </CardTitle>
              {project.isPrivate && (
                <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-0">
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
              >
                View Project
              </Button>
            ) : (
              <Badge className="bg-orange-500/10 text-orange-600 border-0">
                <Code className="w-4 h-4 mr-2" />
                Confidential
              </Badge>
            )}
          </div>
          
          <CardDescription className="font-medium mt-2 text-gray-600">{project.tech}</CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <ul className="space-y-2">
            {project.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-2 text-black">
                <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                {desc}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}