import { motion } from 'framer-motion';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <motion.div
      className="mt-16 mb-8 flex justify-center flex-col items-center relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <motion.div
        className="absolute -z-10 w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 blur-xl opacity-60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.h2
        className="text-3xl font-bold mb-3 gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}>
        {title}
      </motion.h2>
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />
    </motion.div>
  );
}
