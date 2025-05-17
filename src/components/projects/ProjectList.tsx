import { useProject } from '../../context/useProject';
import { PROJECTS } from '../../consts';
import { Project } from '../../types';

export function ProjectList() {
  const { currentIndex, setCurrentProject, handleCurrentIndexChange } = useProject();

  const handleCurrentProjectClick = (project: Project, index: number) => {
    setCurrentProject(project);
    handleCurrentIndexChange(index);
  };

  return (
    <div className="flex gap-10 justify-center min-h-[100px]">
      {PROJECTS.map((project, index) => (
        <button
          key={`${project.name}-${index}`}
          onClick={() => handleCurrentProjectClick(project, index)}
          className={
            `bg-[${project.color}] ` +
            (currentIndex === index && ' scale-120 z-10 ') +
            'cursor-pointer aspect-[4/5] min-h-[100px] md:h-[180px] rounded-sm relative overflow-hidden shadow-[-30px_4px_12px_-1px_rgba(0,_0,_0,_0.7)] hover:scale-120 transition-transform hover:z-10'
          }>
          {project.logo && (
            <img
              src={project.logo}
              className="absolute left-1/2 top-1/2 w-9 h-9 md:w-[50px] md:h-[50px] object-contain -translate-x-1/2 -translate-y-1/2"
              alt={project.name}
            />
          )}
          <div
            className="
              absolute top-0 left-0 h-full w-[22px]
              z-10
              rounded-l-sm
            "
            style={{
              background: `linear-gradient(
                to right, 
                rgba(64, 64, 64, 0.3) 3px, 
                rgba(185, 185, 185, 0.3) 5px, 
                rgba(255, 255, 255, 0.25) 3px, 
                rgba(255, 255, 255, 0.2) 10px, 
                transparent 12px, 
                transparent 16px, 
                rgba(255, 255, 255, 0.1) 17px, 
                transparent 22px
              )`,
            }}></div>
          <div className="absolute top-0 left-0 w-[180px] h-full shadow-[inset_10px_0_30px_-4px_rgba(0,0,0,0.4)] bg-transparent"></div>
        </button>
      ))}
    </div>
  );
}
