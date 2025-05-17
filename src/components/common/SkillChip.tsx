import { motion } from 'framer-motion';

interface SkillChipProps {
  skill: string;
}

export function SkillChip({ skill }: SkillChipProps) {
  // 스킬 카테고리에 따라 다른 색상 적용
  const getSkillColor = (skill: string) => {
    if (
      skill.includes('React') ||
      skill.includes('Next') ||
      skill.includes('Vue') ||
      skill.includes('Three.js') ||
      skill.includes('React-Three-Fiber')
    ) {
      return 'primary';
    } else if (
      skill.includes('JavaScript') ||
      skill.includes('TypeScript') ||
      skill.includes('HTML') ||
      skill.includes('CSS')
    ) {
      return 'secondary';
    } else if (skill.includes('Tailwind') || skill.includes('Styled') || skill.includes('SCSS')) {
      return 'accent';
    }
    return 'gray';
  };

  const skillColor = getSkillColor(skill);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center px-3 py-1.5 rounded-lg animated-border
        ${
          skillColor === 'primary'
            ? 'bg-primary/5 text-primary dark:bg-primary/10'
            : skillColor === 'secondary'
            ? 'bg-secondary/5 text-secondary dark:bg-secondary/10'
            : skillColor === 'accent'
            ? 'bg-accent/5 text-accent dark:bg-accent/10'
            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
        }
        text-sm font-medium cursor-pointer
        transition-all duration-300 ease-in-out
      `}>
      {/* 스킬 아이콘이 있다면 여기에 추가할 수 있음 */}
      <span>{skill}</span>
    </motion.div>
  );
}
