import { motion } from 'framer-motion';

export function MyInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center md:items-start">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 animate-pulse-slow">
        반갑습니다! 👋
      </motion.div>
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-2 gradient-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}>
        신명희
      </motion.h1>
      <motion.h2
        className="text-xl font-light text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}>
        프론트엔드 개발자
      </motion.h2>
    </motion.div>
  );
}
