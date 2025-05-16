import { ProjectProvider } from '../../context/projectContext';
import { ProjectList } from './ProjectList';
import { SelectedProject } from './SelectedProject';

export function Projects() {
  return (
    <ProjectProvider>
      <div>
        <SelectedProject />
        <ProjectList />
      </div>
    </ProjectProvider>
  );
}
