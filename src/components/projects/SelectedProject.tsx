import { useProject } from '../../context/useProject';
import { motion, AnimatePresence } from 'framer-motion';

export function SelectedProject() {
  const { currentProject, nextProject, prevProject } = useProject();

  const handleProjectLinkClick = () => {
    if (currentProject?.link) {
      window.open(currentProject.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative px-4">
      {/* 네비게이션 버튼 */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-primary  cursor-pointer transition-colors duration-300 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-primary cursor-pointer  transition-colors duration-300 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {currentProject ? (
          <motion.div
            key={currentProject.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* 프로젝트 이미지 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group">
                <div
                  onClick={handleProjectLinkClick}
                  className={`relative mt-0 md:mt-[100px] h-[500px] rounded-2xl overflow-hidden cursor-pointer ${
                    currentProject.link ? 'hover:shadow-2xl' : ''
                  }`}>
                  {currentProject.img ? (
                    <img
                      src={currentProject.img}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      alt={currentProject.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      {currentProject.logo && (
                        <img src={currentProject.logo} className="w-32 h-32 object-contain" alt={currentProject.name} />
                      )}
                    </div>
                  )}
                  {currentProject.link && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">웹사이트 방문</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* 프로젝트 정보 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-4xl font-bold mb-3">
                    {currentProject.name}
                  </motion.h2>
                  {currentProject.role && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                      {currentProject.role}
                    </motion.p>
                  )}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-gray-500">
                    {currentProject.period}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="space-y-6">
                  {currentProject.description.contents.map((content, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{content.main}</h3>
                      {content.sub && <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content.sub}</p>}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-500 text-lg">
            선택된 프로젝트가 없습니다
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
