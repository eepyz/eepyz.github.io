import { useProject } from '../../context/useProject';

export function SelectedProject() {
  const { currentProject } = useProject();

  return (
    <div>
      {currentProject ? (
        <div>
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
        </div>
      ) : (
        <p>선택된 프로젝트가 없습니다</p>
      )}
    </div>
  );
}
