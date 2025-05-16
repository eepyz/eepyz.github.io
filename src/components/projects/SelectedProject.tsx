import { useProject } from '../../context/useProject';

export function SelectedProject() {
  const { currentProject } = useProject();

  return (
    <div className="p-4">
      {currentProject ? (
        <div className="flex flex-col md:flex-row gap-16">
          <div className="relative">
            <div
              className={
                'w-[300px] h-[400px] rounded-sm relative overflow-hidden transform translate-y-[20px] rotate-[2deg] shadow-[-20px_20px_30px_rgba(0,0,0,0.4)] transition-all duration-300'
              }
              style={{
                boxShadow: '-20px 20px 30px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.4)',
              }}>
              {currentProject.img ? (
                <img src={currentProject.img} className="w-full h-full object-cover" alt={currentProject.name} />
              ) : (
                <div className={`w-full h-full bg-[${currentProject.color}]`}>
                  {currentProject.logo && (
                    <img
                      src={currentProject.logo}
                      className="absolute left-1/2 top-1/2 w-[100px] h-[100px] object-contain -translate-x-1/2 -translate-y-1/2"
                      alt={currentProject.name}
                    />
                  )}
                </div>
              )}
              <div
                className="absolute top-0 left-0 h-full w-[22px] z-10 rounded-l-sm"
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
            </div>
            <div className="absolute bottom-[-40px] left-[10px] right-[10px] h-[20px] bg-black/20 blur-xl rounded-full z-[-1]"></div>
          </div>
          <div className="flex-1 pt-6">
            <h2 className="text-3xl font-bold mb-4">{currentProject.name}</h2>
            {currentProject.role && <p className="text-gray-600 mb-4 text-lg">{currentProject.role}</p>}
            <p className="mb-4 text-gray-500">{currentProject.period}</p>
            <div className="space-y-6 mt-8">
              {currentProject.description.contents.map((content, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-xl mb-2">{content.main}</h3>
                  {content.sub && <p className="text-gray-600">{content.sub}</p>}
                </div>
              ))}
            </div>
            {currentProject.link && (
              <a
                href={currentProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-8 inline-block">
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
