import { motion } from 'framer-motion';
import { Link } from '../../types';

const onClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export function LinkButton({ url, icon }: Link) {
  return (
    <motion.button
      onClick={() => onClick(url)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative flex items-center justify-center p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg transition-all duration-300">
        <span className="text-xl">{icon}</span>
      </div>
    </motion.button>
  );
}
