import { ProjectProvider } from '../../context/projectContext';
import { ProjectList } from './ProjectList';
import { SelectedProject } from './SelectedProject';

export function Projects() {
  return (
    <ProjectProvider>
      <div className="flex flex-col gap-10">
        <SelectedProject />
        <ProjectList />
      </div>
    </ProjectProvider>
  );
}
