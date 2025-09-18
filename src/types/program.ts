import type { LucideIcon } from 'lucide-react';

export interface Event {
  id: string;
  title: string;
  description: string;
  date?: string;
  images: string[];
}

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
  events?: Event[];
}
