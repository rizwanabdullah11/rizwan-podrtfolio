import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiDart
} from 'react-icons/si';
import { FaReact, FaMobile, FaServer, FaPhone } from 'react-icons/fa';
import { Skill } from './types';

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'JavaScript',
    icon: <SiJavascript className="w-6 h-6" />,
    level: 95,
    color: 'from-yellow-500 to-orange-500',
    category: 'languages'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-6 h-6" />,
    level: 90,
    color: 'from-blue-500 to-blue-600',
    category: 'languages'
  },
  {
    name: 'Python',
    icon: <SiPython className="w-6 h-6" />,
    level: 85,
    color: 'from-green-500 to-blue-500',
    category: 'languages'
  },
  {
    name: 'C++',
    icon: <SiCplusplus className="w-6 h-6" />,
    level: 80,
    color: 'from-blue-600 to-purple-600',
    category: 'languages'
  },
  {
    name: 'Dart',
    icon: <SiDart className="w-6 h-6" />,
    level: 75,
    color: 'from-blue-400 to-cyan-500',
    category: 'languages'
  },

  // Frontend & Mobile
  {
    name: 'React.js',
    icon: <SiReact className="w-6 h-6" />,
    color: 'from-cyan-400 to-blue-500',
    category: 'frontend'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="w-6 h-6" />,
    color: 'from-gray-700 to-gray-900',
    category: 'frontend'
  },
  {
    name: 'React Native',
    icon: <FaReact className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-600',
    category: 'mobile'
  },
  {
    name: 'Redux',
    icon: <SiRedux className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-700',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="w-6 h-6" />,
    color: 'from-cyan-400 to-teal-500',
    category: 'frontend'
  },

  // Backend
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="w-5 h-5 text-white" />,
    description: 'Server-side JavaScript runtime',
    color: 'from-green-500 to-green-600',
    category: 'backend'
  },
  {
    name: 'Express.js',
    icon: <SiNodedotjs className="w-5 h-5 text-white" />,
    description: 'Web application framework',
    color: 'from-gray-600 to-gray-800',
    category: 'backend'
  },
  {
    name: 'PHP & Laravel',
    icon: <SiPhp className="w-5 h-5 text-white" />,
    description: 'Web development & framework',
    color: 'from-indigo-500 to-purple-600',
    category: 'backend'
  },

  // Databases
  {
    name: 'MongoDB',
    icon: <SiMongodb className="w-5 h-5 text-white" />,
    description: 'NoSQL Database',
    color: 'from-green-500 to-green-600',
    category: 'database'
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="w-5 h-5 text-white" />,
    description: 'Relational Database',
    color: 'from-blue-600 to-indigo-600',
    category: 'database'
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="w-5 h-5 text-white" />,
    description: 'Backend as a Service',
    color: 'from-yellow-500 to-orange-500',
    category: 'database'
  },

  // Tools
  {
    name: 'ViciDial',
    icon: <FaPhone className="w-5 h-5 text-white" />,
    description: 'Call Center Platform',
    color: 'from-emerald-500 to-teal-600',
    category: 'tools'
  },
  {
    name: 'Git & GitHub',
    icon: <SiGithub className="w-5 h-5 text-white" />,
    description: 'Version Control',
    color: 'from-gray-700 to-gray-900',
    category: 'tools'
  }
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category);
};