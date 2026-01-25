import { ReactNode } from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  tagline: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  level?: number;
  color: string;
  description?: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools' | 'languages';
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  gradient: string;
  bgGradient: string;
  borderColor: string;
  achievements: string[];
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  achievements: string[];
  gradient: string;
  bgGradient: string;
  borderColor: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  icon: ReactNode;
  gradient: string;
}

export interface Project {
  title: string;
  description: string[];
  tech: string;
  url?: string;
  gradient: string;
  isPrivate?: boolean;
  featured?: boolean;
}

export interface Stat {
  number: string;
  label: string;
  sublabel?: string;
  icon: ReactNode;
}

export interface ContactInfo {
  type: string;
  value: string;
  icon: ReactNode;
  href: string;
  gradient: string;
}