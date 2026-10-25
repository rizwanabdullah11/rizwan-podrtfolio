import { Project } from './types';

export const projects: Project[] = [
  // ── Mobile Apps (React Native) ──────────────────────────────────────────────
  {
    title: "Cross-Platform Mobile Banking App",
    tech: "React Native, Redux, Firebase, Biometric Auth",
    category: "React Native Mobile",
    description: [
      "Built secure mobile banking application with biometric authentication, real-time transactions, and offline capabilities",
      "Implemented push notifications, deep linking, and direct integration with banking APIs for iOS and Android platforms"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    isPrivate: true,
    featured: true,
    type: "mobile"
  },
  {
    title: "React Native E-Commerce Mobile App",
    tech: "React Native, Redux Toolkit, Stripe, Push Notifications",
    category: "React Native Mobile",
    description: [
      "Developed full-featured e-commerce mobile app with product catalog, shopping cart, secure payments, and order tracking",
      "Integrated real-time inventory management, push notifications for order updates, and one-step checkout flow"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    isPrivate: true,
    type: "mobile"
  },
  {
    title: "React Native Food Delivery App",
    tech: "React Native, Redux Toolkit, Google Maps API, Firebase",
    category: "React Native Mobile",
    description: [
      "Built a real-time food delivery app with live order tracking, restaurant listings, and in-app payments",
      "Integrated Google Maps for delivery tracking, push notifications for order status updates, and smooth animations"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    isPrivate: true,
    type: "mobile"
  },
  {
    title: "React Native Chat Application",
    tech: "React Native, Firebase, WebSocket, Push Notifications",
    category: "React Native Mobile",
    description: [
      "Developed a real-time messaging app with one-on-one and group chat, media sharing, and read receipts",
      "Implemented Firebase Realtime Database for instant messaging, push notifications, and online presence indicators"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    isPrivate: true,
    type: "mobile"
  },

  // ── Web Apps (Next.js & React.js) ───────────────────────────────────────────
  {
    title: "Business Smart Suite (Enterprise Admin & Audit Portal)",
    url: "https://business-smart-suite.vercel.app/",
    tech: "Next.js, TypeScript, ShadCN UI, Tailwind CSS, Role-Based Access Control",
    category: "Enterprise RBAC",
    description: [
      "Built an enterprise multi-tenant management portal inspired by ISSO standards with end-to-end Role-Based Access Control (RBAC)",
      "Implemented dedicated workflows and permission tiers for Super Admin, Organization, Employee, and Compliance Auditor roles with audit logging and data analytics"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "WOW Gutters Ltd Service Platform",
    url: "https://wowgutters.co.uk",
    tech: "Next.js, TypeScript, Tailwind CSS, Technical SEO",
    category: "Technical & Local SEO",
    description: [
      "Built a high-performance commercial service platform for exterior cleaning and gutter maintenance in the UK",
      "Engineered comprehensive SEO architecture with structured schema, automated quote generation, high Core Web Vitals scores, and top search engine rankings"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "Birmingham Gutter Cleaning Services",
    url: "http://guttercleaningbirmingham.services/",
    tech: "Next.js, TypeScript, Tailwind CSS, Local SEO",
    category: "Technical & Local SEO",
    description: [
      "Engineered a high-converting local service platform with automated quote calculation and instant customer booking",
      "Executed comprehensive SEO architecture: local keyword targeting across 40+ West Midlands zones, schema markup, OpenGraph metadata, and Core Web Vitals optimization"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "Grey Gutters Commercial & Domestic Services",
    url: "https://greygutters.com/",
    tech: "Next.js, TypeScript, Tailwind CSS, Technical SEO",
    category: "Technical & Local SEO",
    description: [
      "Developed a modern web application for residential & commercial gutter cleaning and exterior maintenance",
      "Implemented end-to-end SEO strategy: semantic HTML, dynamic sitemaps, structured service data, fast SSR, and top organic SERP ranking performance"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "Prime Roof Works UK",
    url: "https://primeroofworks.co.uk/",
    tech: "Next.js, TypeScript, Tailwind CSS, SEO Optimization",
    category: "Technical & Local SEO",
    description: [
      "Built a professional roofing and exterior renovation web platform featuring quotation inquiries and service galleries",
      "Delivered complete SEO optimization: meta tags architecture, optimized image delivery, structured breadcrumbs, and local citation integration"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "M-eState Housing Society Management",
    url: "https://mestate.must.services/login",
    tech: "Next.js, Nest.js, PostgreSQL, RBAC",
    category: "Enterprise RBAC",
    description: [
      "Developed a comprehensive housing society management system with role-based access control for residents, management, and administrators",
      "Implemented features for property management, maintenance requests, billing systems, and community announcements with real-time notifications"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "RADZ Admin Dashboard Portal",
    url: "https://rdaz-admin-dashboard.vercel.app/",
    tech: "Next.js, ShadCN UI, Chart.js, TypeScript",
    category: "Admin Dashboard",
    description: [
      "Built a sophisticated admin dashboard with comprehensive analytics and campaign management capabilities for marketing operations",
      "Integrated interactive data visualizations, performance metrics tracking, and user management systems with responsive design"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    type: "web"
  },
  {
    title: "Advanced Admin Dashboard Portal",
    url: "https://admin-dashboard-shadcn.vercel.app/",
    tech: "Next.js, Shadcn UI, TypeScript",
    category: "Admin Dashboard",
    description: [
      "Built modern admin interface with Shadcn UI, analytics, data filtering, and interactive charts",
      "Implemented role-based access, data tables with sorting, and fully responsive layout"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    type: "web"
  },
  {
    title: "Task Management With Video Call",
    url: "https://task-management-with-video-call.vercel.app/",
    tech: "React.js, WebRTC, Tailwind CSS",
    category: "WebRTC App",
    description: [
      "Developed dashboards with task workflows, real-time chat, and video collaboration",
      "Integrated WebRTC for peer-to-peer video calls directly within the task management interface"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    type: "web"
  }
];

export const getMobileProjects = () => projects.filter(p => p.type === 'mobile');
export const getWebProjects = () => projects.filter(p => p.type === 'web');
export const getSEOProjects = () => projects.filter(p => p.category?.includes('SEO'));
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getPublicProjects = () => projects.filter(p => !p.isPrivate);
