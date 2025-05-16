import { useProject } from '../../context/useProject';

export function SelectedProject() {
  const { currentProject } = useProject();

  return (
    <div className="p-4">
      {currentProject ? (
        <div className="flex gap-10">
          <div>
            <div
              className={
                `bg-[${currentProject.color}] ` +
                'cursor-pointer w-[200px] h-[300px] rounded-sm relative overflow-hidden  shadow-[-30px_4px_12px_-1px_rgba(0,_0,_0,_0.7)] transition-transform '
              }>
              {currentProject.logo && (
                <img
                  src={currentProject.logo}
                  className="absolute left-1/2 top-1/2 w-[50px] h-[50px] object-contain -translate-x-1/2 -translate-y-1/2"
                  alt={currentProject.name}
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
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{currentProject.name}</h2>
            {currentProject.role && <p className="text-gray-600 mb-4">{currentProject.role}</p>}
            <p className="mb-2">{currentProject.period}</p>
            <div className="space-y-4">
              {currentProject.description.contents.map((content, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{content.main}</h3>
                  {content.sub && <p className="text-gray-600">{content.sub}</p>}
                </div>
              ))}
            </div>
            {currentProject.link && (
              <a
                href={currentProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 inline-block">
                {currentProject.link}
              </a>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">선택된 프로젝트가 없습니다</p>
      )}
    </div>
  );
}
