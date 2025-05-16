import { createContext, useState, ReactNode } from 'react';
import { Project } from '../types';

// 타입
interface ProjectContextType {
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
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
