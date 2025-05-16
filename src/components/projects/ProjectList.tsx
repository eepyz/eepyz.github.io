import { useProject } from '../../context/useProject';
import { PROJECTS } from '../../consts';

export function ProjectList() {
  const { setCurrentProject } = useProject();

  return (
    <>
      {PROJECTS.map(({ name, role, period, description, link, href }) => (
        <div>
          
        </div>
      ))}
    </>
  );
}
