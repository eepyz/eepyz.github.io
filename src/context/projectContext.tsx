import { createContext, useState, ReactNode } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../consts';

// 타입
interface ProjectContextType {
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
  handleCurrentIndexChange: (index: number) => void;
  nextProject: () => void;
  prevProject: () => void;
  currentIndex: number;
}

interface ProjectProviderProps {
  children: ReactNode;
}

// 1. createContext
export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [currentProject, setCurrentProject] = useState<Project | null>(PROJECTS[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setCurrentIndex(nextIndex);
    setCurrentProject(PROJECTS[nextIndex]);
  };

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setCurrentIndex(prevIndex);
    setCurrentProject(PROJECTS[prevIndex]);
  };

  const handleCurrentIndexChange = (index: number) => {
    setCurrentIndex(index);
    setCurrentProject(PROJECTS[index]);
  };

  return (
    <ProjectContext.Provider
      value={{
        currentProject,
        setCurrentProject,
        handleCurrentIndexChange,
        nextProject,
        prevProject,
        currentIndex,
      }}>
      {children}
    </ProjectContext.Provider>
  );
};
