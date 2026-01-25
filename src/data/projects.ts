import { Project } from './types';

export const projects: Project[] = [
  {
    title: "ViciDial Call Center Management System",
    tech: "ViciDial, Asterisk, MySQL, PHP, Linux",
    description: [
      "Implemented complete ViciDial solution for enterprise call center with 100+ agents and multi-campaign management",
      "Developed custom reporting dashboards, real-time monitoring, and automated lead distribution systems with CRM integration"
    ],
    gradient: "from-emerald-500 to-teal-500",
    isPrivate: true,
    featured: true
  },
  {
    title: "Cross-Platform Mobile Banking App",
    tech: "React Native, Redux, Firebase, Biometric Auth",
    description: [
      "Built secure mobile banking application with biometric authentication, real-time transactions, and offline capabilities",
      "Implemented push notifications, deep linking, and seamless integration with banking APIs for iOS and Android platforms"
    ],
    gradient: "from-blue-500 to-indigo-500",
    isPrivate: true,
    featured: true
  },
  {
    title: "M-eState Housing Society Management",
    url: "https://mestate.must.services/login",
    tech: "Next.js, Nest.js, PostgreSQL",
    description: [
      "Developed a comprehensive housing society management system with role-based access control for residents, management, and administrators",
      "Implemented features for property management, maintenance requests, billing systems, and community announcements with real-time notifications"
    ],
    gradient: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    title: "React Native E-Commerce Mobile App",
    tech: "React Native, Redux Toolkit, Stripe, Push Notifications",
    description: [
      "Developed full-featured e-commerce mobile app with product catalog, shopping cart, secure payments, and order tracking",
      "Integrated real-time inventory management, push notifications for order updates, and seamless checkout experience"
    ],
    gradient: "from-purple-500 to-pink-500",
    isPrivate: true
  },
  {
    title: "RADZ Admin Dashboard Portal",
    url: "https://rdaz-admin-dashboard.vercel.app/",
    tech: "Next.js, ShadCN UI, Chart.js, TypeScript",
    description: [
      "Built a sophisticated admin dashboard with comprehensive analytics and campaign management capabilities for marketing operations",
      "Integrated interactive data visualizations, performance metrics tracking, and user management systems with responsive design"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "ViciDial Custom Agent Interface",
    tech: "PHP, JavaScript, MySQL, WebRTC, Asterisk",
    description: [
      "Created custom agent interface for ViciDial with enhanced UI/UX, real-time call controls, and integrated CRM functionality",
      "Implemented advanced call routing, disposition management, and performance analytics with WebRTC integration"
    ],
    gradient: "from-green-500 to-emerald-500",
    isPrivate: true
  },
  {
    title: "Advanced Admin Dashboard Portal",
    url: "https://admin-dashboard-shadcn.vercel.app/",
    tech: "Next.js, Shadcn UI, TypeScript",
    description: [
      "Built modern admin interface with Shadcn UI, analytics, dark mode, charts"
    ],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Task Management With Video Call",
    url: "https://task-management-with-video-call.vercel.app/",
    tech: "React.js, WebRTC",
    description: [
      "Developed dashboards with task workflows, real-time chat, and video collaboration"
    ],
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getPublicProjects = () => {
  return projects.filter(project => !project.isPrivate);
};