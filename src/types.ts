export type ProjectCategory = 'branding' | 'print' | 'event' | 'digital';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  client?: string;
  year: string;
  image: string;
  aspectRatio: '16:9' | '4:3' | '3:4';
  tools: string[];
  objective: string;
  role: string;
  overview: string;
  keyFeatures: string[];
  colorPalette: { name: string; hex: string }[];
  typography?: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  description: string;
  category: 'core' | 'software' | 'creative';
}

export interface SoftwareTool {
  name: string;
  iconName: string;
  percentage: number;
  experienceLevel: string;
  category: 'Raster/Vector' | 'Motion/Video' | '3D/Animation';
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: 'Current' | 'Completed';
  highlights: string[];
}

export interface HobbyItem {
  title: string;
  description: string;
  icon: string;
  tag: string;
}
