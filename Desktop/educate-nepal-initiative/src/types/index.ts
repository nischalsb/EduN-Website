import type { LucideIcon } from 'lucide-react';

export interface Program {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  impact: string;
  category: string;
  image: string;
  details: string[];
  year: string;
  fullDescription?: string;
  location?: string;
  date?: string;
  budget?: string;
  sponsors?: string[];
  objectives?: string[];
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Stats {
  studentsImpacted: number;
  schoolsSupported: number;
  teachersTrained: number;
  yearsActive: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface VolunteerForm {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  availability: string;
  experience: string;
  motivation: string;
}
