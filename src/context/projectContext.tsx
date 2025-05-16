import React, { createContext, useState, ReactNode } from 'react';

// 타입
interface ProjectContextType {
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
}

interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

interface ProjectProviderProps {
  children: ReactNode;
}

// 1. createContext
export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider
      value={{
        currentProject,
        setCurrentProject,
      }}>
      {children}
    </ProjectContext.Provider>
  );
};
