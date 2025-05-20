import { motion } from 'framer-motion';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <motion.div
      className="mb-8 flex justify-center flex-col items-center relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <motion.h2
        className="text-3xl font-bold mb-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}>
        {title}
      </motion.h2>
    </motion.div>
  );
}
