import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '../../types';
import { useRef } from 'react';
import { IoSchoolOutline, IoBookOutline, IoCalendarOutline, IoTrophyOutline } from 'react-icons/io5';

interface ExperienceItemProps {
  experience: EXPERIENCE;
  index: number;
  isLast: boolean;
}

function ExperienceItem({ experience, index, isLast }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { name, period, role, description, category, achievement, logo } = experience;

  // 카테고리별 색상 정의
  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'education':
        return 'var(--color-primary)';
      case 'bootcamp':
        return 'var(--color-secondary)';
      case 'certification':
        return 'var(--color-accent)';
      case 'course':
        return '#f59e0b'; // amber-500
      default:
        return '#6b7280'; // gray-500
    }
  };

  // 카테고리별 이름 정의
  const getCategoryName = (category?: string) => {
    switch (category) {
      case 'education':
        return '정규 교육';
      case 'bootcamp':
        return '부트캠프';
      case 'certification':
        return '자격증';
      case 'course':
        return '수료 과정';
      default:
        return '교육';
    }
  };

  const categoryColor = getCategoryColor(category);
  const categoryName = getCategoryName(category);

  return (
    <motion.div
      ref={ref}
      className="relative bg-white dark:bg-gray-800/30 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}>
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary/50 to-primary/5 hidden md:block"></div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col md:flex-row gap-6 p-5 rounded-xl transition-colors duration-300">
          {/* Left side - details */}
          <div className="md:w-1/3 flex flex-col">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-4 relative overflow-hidden">
              {/* 카테고리 뱃지 */}
              {category && (
                <div
                  style={{
                    backgroundColor: categoryColor,
                    color: 'white',
                  }}
                  className="absolute top-0 right-0 px-3 py-1 text-xs font-medium rounded-bl-lg">
                  {categoryName}
                </div>
              )}

              {/* 로고가 있으면 표시 */}
              {logo && (
                <div className="flex justify-center mb-3">
                  <img src={logo} alt={`${name} 로고`} className="h-12 w-auto object-contain mb-2" />
                </div>
              )}

              <div className="text-xl font-bold text-primary hover:underline mb-2 flex items-center gap-2">
                <IoSchoolOutline className="text-xl" />
                <span>{name}</span>
              </div>

              {role && (
                <div className="text-gray-700 dark:text-gray-300 font-medium mb-1 flex items-center gap-2">
                  <IoBookOutline className="text-secondary text-sm" />
                  <span>{role}</span>
                </div>
              )}

              <div className="text-gray-500 dark:text-gray-400 text-sm mb-2 flex items-center gap-2">
                <IoCalendarOutline className="text-sm" />
                <span>{period}</span>
              </div>

              {/* 성과 표시 */}
              {achievement && (
                <div className="text-accent dark:text-accent-light text-sm mt-2 font-medium flex items-center gap-2">
                  <IoTrophyOutline className="text-sm" />
                  <span>{achievement}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right side - content */}
          <div className="md:w-2/3">
            {description.title && (
              <motion.div
                className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4 px-3 py-1.5 bg-secondary/5 dark:bg-secondary/10 rounded-md inline-block"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}>
                {description.title}
              </motion.div>
            )}

            <ul className="space-y-4 mt-4">
              {description.contents.map((content, idx) => (
                <motion.li
                  key={idx}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 + idx * 0.05, duration: 0.3 }}>
                  <div className="text-secondary flex-shrink-0">•</div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">{content.main}</div>
                    {content.sub && <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">{content.sub}</div>}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ExperiencesProps {
  experiences: EXPERIENCE[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col gap-12 py-6">
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.name}
          experience={experience}
          index={index}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
