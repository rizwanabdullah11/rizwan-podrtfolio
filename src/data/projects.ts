import { Project } from './types';

export const projects: Project[] = [
  // ── Mobile Apps (React Native) ──────────────────────────────────────────────
  {
    title: "Cross-Platform Mobile Banking App",
    tech: "React Native, Redux, Firebase, Biometric Auth",
    description: [
      "Built secure mobile banking application with biometric authentication, real-time transactions, and offline capabilities",
      "Implemented push notifications, deep linking, and seamless integration with banking APIs for iOS and Android platforms"
    ],
    gradient: "from-emerald-500 to-cyan-500",
    isPrivate: true,
    featured: true,
    type: "mobile"
  },
  {
    title: "React Native E-Commerce Mobile App",
    tech: "React Native, Redux Toolkit, Stripe, Push Notifications",
    description: [
      "Developed full-featured e-commerce mobile app with product catalog, shopping cart, secure payments, and order tracking",
      "Integrated real-time inventory management, push notifications for order updates, and seamless checkout experience"
    ],
    gradient: "from-teal-500 to-cyan-500",
    isPrivate: true,
    type: "mobile"
  },
  {
    title: "React Native Food Delivery App",
    tech: "React Native, Redux Toolkit, Google Maps API, Firebase",
    description: [
      "Built a real-time food delivery app with live order tracking, restaurant listings, and in-app payments",
      "Integrated Google Maps for delivery tracking, push notifications for order status updates, and smooth animations"
    ],
    gradient: "from-orange-500 to-red-500",
    isPrivate: true,
    type: "mobile"
  },
  {
    title: "React Native Chat Application",
    tech: "React Native, Firebase, WebSocket, Push Notifications",
    description: [
      "Developed a real-time messaging app with one-on-one and group chat, media sharing, and read receipts",
      "Implemented Firebase Realtime Database for instant messaging, push notifications, and online presence indicators"
    ],
    gradient: "from-purple-500 to-indigo-500",
    isPrivate: true,
    type: "mobile"
  },

  // ── Web Apps (Next.js & React.js) ───────────────────────────────────────────
  {
    title: "M-eState Housing Society Management",
    url: "https://mestate.must.services/login",
    tech: "Next.js, Nest.js, PostgreSQL",
    description: [
      "Developed a comprehensive housing society management system with role-based access control for residents, management, and administrators",
      "Implemented features for property management, maintenance requests, billing systems, and community announcements with real-time notifications"
    ],
    gradient: "from-cyan-500 to-teal-500",
    featured: true,
    type: "web"
  },
  {
    title: "RADZ Admin Dashboard Portal",
    url: "https://rdaz-admin-dashboard.vercel.app/",
    tech: "Next.js, ShadCN UI, Chart.js, TypeScript",
    description: [
      "Built a sophisticated admin dashboard with comprehensive analytics and campaign management capabilities for marketing operations",
      "Integrated interactive data visualizations, performance metrics tracking, and user management systems with responsive design"
    ],
    gradient: "from-emerald-500 to-teal-500",
    type: "web"
  },
  {
    title: "Advanced Admin Dashboard Portal",
    url: "https://admin-dashboard-shadcn.vercel.app/",
    tech: "Next.js, Shadcn UI, TypeScript",
    description: [
      "Built modern admin interface with Shadcn UI, analytics, dark mode, and interactive charts",
      "Implemented role-based access, data tables with filtering/sorting, and fully responsive layout"
    ],
    gradient: "from-teal-500 to-emerald-500",
    type: "web"
  },
  {
    title: "Task Management With Video Call",
    url: "https://task-management-with-video-call.vercel.app/",
    tech: "React.js, WebRTC",
    description: [
      "Developed dashboards with task workflows, real-time chat, and video collaboration",
      "Integrated WebRTC for peer-to-peer video calls directly within the task management interface"
    ],
    gradient: "from-emerald-500 to-cyan-500",
    type: "web"
  }
];

export const getMobileProjects = () => projects.filter(p => p.type === 'mobile');
export const getWebProjects = () => projects.filter(p => p.type === 'web');
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getPublicProjects = () => projects.filter(p => !p.isPrivate);
