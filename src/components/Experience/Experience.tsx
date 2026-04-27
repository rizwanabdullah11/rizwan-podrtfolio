'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      id="experience"
      className="mb-24"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-white via-emerald-50 to-teal-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-emerald-100 dark:border-gray-600 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <motion.div
              className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Professional Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "Junior Software Developer",
                company: "MUST Pvt Ltd",
                location: "MGC Complex G8 Markaz, Islamabad, Pakistan",
                period: "May 2025 -- Present",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
                borderColor: "border-blue-200 dark:border-blue-800",
                achievements: [
                  "Leading development of enterprise-grade React Native applications",
                  "Architecting scalable Frontend solutions with Next.js",
                  "Mentoring junior developers and establishing coding standards"
                ]
              },
              {
                title: "Software Engineer (Remote)",
                company: "DragSense",
                location: "Islamabad, Pakistan",
                period: "February 2025 -- April 2025",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
                borderColor: "border-indigo-200 dark:border-indigo-800",
                achievements: [
                  "Developed cross-platform mobile applications using React Native",
                  "Integrated real-time features with WebSocket and Firebase",
                  "Optimized application performance resulting in 40% faster load times",
                  "Collaborated with international teams across different time zones"
                ]
              },
              {
                title: "Full Stack Web Developer",
                company: "iOPTIME Pvt Ltd",
                location: "G8 Markaz, Islamabad, Pakistan",
                period: "November 2024 -- January 2025",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
                borderColor: "border-emerald-200 dark:border-emerald-800",
                achievements: [
                  "Built responsive web applications with Next.js and TypeScript",
                  "Implemented ViciDial call center solutions for enterprise clients",
                  "Developed RESTful APIs and integrated third-party services",
                  "Delivered projects 20% ahead of schedule with zero critical bugs"
                ]
              }
            ].map((job, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp} 
                className={`relative group bg-gradient-to-r ${job.bgGradient} rounded-2xl p-8 border ${job.borderColor} hover:shadow-xl transition-all duration-500`}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                {/* Timeline Connector */}
                <div className="absolute -left-6 top-8 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg border-4 border-white dark:border-gray-800"></div>
                {index < 2 && (
                  <div className="absolute -left-4 top-12 w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"></div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <motion.div
                    className={`mt-4 lg:mt-0 px-4 py-2 bg-gradient-to-r ${job.gradient} text-white rounded-full text-sm font-medium shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {job.period}
                  </motion.div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Achievements:</h4>
                  {job.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${job.gradient} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}