import { useProject } from '../../context/useProject';
import { motion, AnimatePresence } from 'framer-motion';

export function SelectedProject() {
  const { currentProject } = useProject();

  return (
    <div className="p-4">
      <AnimatePresence mode="wait">
        {currentProject ? (
          <motion.div
            key={currentProject.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-16">
            <div className="relative">
              <motion.div
                initial={{
                  rotate: -10,
                  y: 50,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  rotate: 2,
                  y: 20,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 120,
                  mass: 0.8,
                  delay: 0.05,
                  duration: 0.6,
                }}
                className="w-[300px] h-[400px] rounded-sm relative overflow-hidden transform shadow-[-20px_20px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
                style={{
                  boxShadow: '-20px 20px 30px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.4)',
                }}>
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full">
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
                </motion.div>
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-[-40px] left-[10px] right-[10px] h-[20px] bg-black/20 blur-xl rounded-full z-[-1]"></motion.div>
            </div>
            <motion.div
              className="flex-1 pt-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                staggerChildren: 0.1,
              }}>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-3xl font-bold mb-4">
                {currentProject.name}
              </motion.h2>

              {currentProject.role && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="text-gray-600 mb-4 text-lg">
                  {currentProject.role}
                </motion.p>
              )}

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mb-4 text-gray-500">
                {currentProject.period}
              </motion.p>

              <motion.div
                className="space-y-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}>
                {currentProject.description.contents.map((content, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}>
                    <h3 className="font-semibold text-xl mb-2">{content.main}</h3>
                    {content.sub && <p className="text-gray-600">{content.sub}</p>}
                  </motion.div>
                ))}
              </motion.div>

              {currentProject.link && (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  href={currentProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-8 inline-block">
                  {currentProject.link}
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-gray-500">
            선택된 프로젝트가 없습니다
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
