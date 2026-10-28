import { Project } from './types';

export const projects: Project[] = [
  // ── Mobile Apps (React Native) ──────────────────────────────────────────────
  {
    title: "Mmall E-Commerce Mobile App",
    tech: "React Native, Redux Toolkit, Node.js, Stripe, Push Notifications",
    category: "React Native Mobile",
    description: [
      "Engineered full-featured e-commerce mobile application featuring product catalogs, advanced category filters, cart management, and secure multi-currency payment checkout",
      "Integrated real-time order tracking, push notification alerts for discount deals, and biometric authentication for frictionless customer experience"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    isPrivate: true,
    featured: true,
    type: "mobile"
  },
  {
    title: "AAN Television Mobile App",
    tech: "React Native, HLS Video Streaming, Redux, Firebase Cloud Messaging",
    category: "React Native Mobile",
    description: [
      "Developed live broadcast and on-demand streaming mobile app for AAN Television with adaptive HLS video playback and low-latency streaming",
      "Implemented program guides (EPG), breaking news notifications, social show sharing, and background audio streaming across iOS and Android"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    isPrivate: true,
    featured: true,
    type: "mobile"
  },
  {
    title: "MNews News Channel Mobile App",
    tech: "React Native, TypeScript, REST APIs, Offline Cache, Push Notifications",
    category: "React Native Mobile",
    description: [
      "Built high-traffic news delivery mobile application with category browsing, breaking news ticker, video reporting, and offline article caching",
      "Implemented personalized topic feeds, instant breaking news alert engine, and bookmarking for reading articles on-the-go"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    isPrivate: true,
    type: "mobile"
  },
  {
    title: "Grocery Delivery Mobile App",
    tech: "React Native, Google Maps API, Redux Toolkit, Socket.io, Firebase",
    category: "React Native Mobile",
    description: [
      "Developed on-demand hyperlocal grocery shopping and delivery app featuring store inventory browsing, real-time rider GPS tracking, and scheduled delivery slots",
      "Integrated live order dispatching, digital wallet payments, push status updates, and customer support chat"
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
      "Engineered an enterprise-grade administration and governance portal with multi-tenant architecture and fine-grained Role-Based Access Control (RBAC)",
      "Implemented complete separation of duties across 4 distinct roles: Admin, Organization Manager, Staff Member, and Auditor with immutable audit logs",
      "Built responsive analytical dashboards with data export (CSV/PDF), user session management, and automated security event tracking"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "WOW Gutters Ltd (Live Commercial Platform)",
    url: "https://wowgutters.co.uk",
    tech: "Next.js, TypeScript, Tailwind CSS, Technical & Local SEO",
    category: "Technical & Local SEO",
    description: [
      "Led end-to-end technical, on-page, and local SEO architecture for a leading UK gutter cleaning and repair service company",
      "Implemented schema.org LocalBusiness structured data, optimized OpenGraph/Twitter cards, and established semantic heading hierarchy",
      "Achieved sub-second Core Web Vitals (LCP < 1.2s, CLS 0), configured XML sitemaps, robots directives, and built high-converting quote request funnels"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "Gutter Cleaning Birmingham Services",
    url: "http://guttercleaningbirmingham.services/",
    tech: "Next.js, Tailwind CSS, Local SEO, Schema Markup",
    category: "Technical & Local SEO",
    description: [
      "Architected location-targeted SEO strategy targeting high-intent commercial keywords across Birmingham and West Midlands areas",
      "Built geo-targeted landing page structure with embedded Google Maps optimization and location-specific service schemas",
      "Optimized technical site architecture for maximum crawl efficiency, mobile usability, and direct call-to-action conversion paths"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    featured: true,
    type: "web"
  },
  {
    title: "Grey Gutters Commercial Platform",
    url: "https://greygutters.com/",
    tech: "React.js, Next.js, Technical SEO, Performance Optimization",
    category: "Technical & Local SEO",
    description: [
      "Delivered full SEO optimization package including keyword mapping, meta title & description engineering, and internal link graph restructuring",
      "Improved mobile responsiveness, optimized asset delivery pipelines, and configured canonical tags to prevent duplicate content indexing",
      "Established comprehensive search console monitoring, resolving crawl errors and boosting organic impressions"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
    type: "web"
  },
  {
    title: "Prime Roof Works UK",
    url: "https://primeroofworks.co.uk/",
    tech: "Next.js, Tailwind CSS, Local SEO, Conversion Rate Optimization",
    category: "Technical & Local SEO",
    description: [
      "Planned and executed local search engine optimization strategy for commercial roofing and repair services across the UK",
      "Configured rich snippet markup, service area geo-coordinates, customer review schemas, and lightning-fast static page generation",
      "Designed and developed responsive quote booking flows that dramatically increased organic mobile inquiry volume"
    ],
    gradient: "from-orange-500 to-amber-500" /* taste-skill-ignore */,
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
