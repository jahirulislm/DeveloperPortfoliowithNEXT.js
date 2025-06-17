import type React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  details?: string; 
}

export interface Skill {
  name: string;
  level?: number; 
  icon?: React.ElementType;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  logoUrl?: string;
  dataAiHint?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
  logoUrl?: string;
  dataAiHint?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  dataAiHint?: string;
  content: string; 
  author?: string;
  tags?: string[];
}

export interface AboutMeData {
  name: string;
  tagline: string;
  bio: string;
  profileImageUrl: string;
  dataAiHint?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}
