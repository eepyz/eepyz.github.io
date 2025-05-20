import { useProject } from '../../context/useProject';
import { PROJECTS } from '../../consts';
import { Project } from '../../types';
import { motion } from 'framer-motion';

export function ProjectList() {
  const { currentIndex, setCurrentProject, handleCurrentIndexChange } = useProject();

  const handleCurrentProjectClick = (project: Project, index: number) => {
    setCurrentProject(project);
    handleCurrentIndexChange(index);
  };

  return (
    <div className="relative w-full">
      <div className="flex gap-4 px-4 justify-center w-full">
        {PROJECTS.map((project, index) => (
          <motion.button
            key={`${project.name}-${index}`}
            onClick={() => handleCurrentProjectClick(project, index)}
            className={`flex-shrink-0 relative group cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'scale-105 z-10' : 'scale-100 hover:scale-102'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}>
            <div
              className={`relative w-[220px] rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 shadow-lg`}>
              <div className="p-6 space-y-4">
                {/* 프로젝트 로고 */}
                {project.logo && (
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <img src={project.logo} className="w-10 h-10 object-contain" alt={project.name} />
                  </div>
                )}

                {/* 프로젝트 정보 */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{project.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{project.period}</p>
                </div>

                {/* 선택 표시 */}
                {currentIndex === index && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
