import { ReactNode } from "react";

declare global {
  interface GlobalContextType {
    title: string;
  }

  interface Project {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    technologies: string[];
    demoUrl: string;
    codeUrl: string;
    featured?: boolean;
  }

  interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
  }

  interface Skill {
    name: string;
    percentage: number;
  }

  interface SkillGroup {
    name: string;
    icon: ReactNode;
    items: Skill[];
  }

  interface Technology {
    name: string;
    icon: ReactNode;
  }
}