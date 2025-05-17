import { motion } from 'framer-motion';
import profileImg from '../../assets/img/profile.jpg';

export function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      }}
      className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative w-40 h-40 overflow-hidden rounded-full border-2 border-white dark:border-gray-800 shadow-soft">
        <motion.img
          className="object-cover w-full h-full"
          src={profileImg}
          alt="profile"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div
        className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{
          y: -5,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        }}>
        <span className="text-lg">👨‍💻</span>
      </motion.div>
    </motion.div>
  );
}
