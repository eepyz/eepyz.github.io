import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '../../types';
import { useRef } from 'react';
import { IoSchoolOutline, IoBookOutline, IoCalendarOutline } from 'react-icons/io5';

interface ExperienceItemProps {
  experience: EXPERIENCE;
  index: number;
  isLast: boolean;
}

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { name, period, role, description } = experience;

  return (
    <motion.div
      ref={ref}
      className="relative bg-white dark:bg-gray-800/30 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col md:flex-row md:gap-6 p-5 md:p-1 rounded-xl transition-colors duration-300">
          {/* Left side - details */}
          <div className="md:w-2/5 flex flex-col">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-lg px-4 md:p-4 md:mb-4 relative overflow-hidden">
              <div className="text-xl font-bold text-primary hover:underline mb-2 flex items-start gap-2">
                <IoSchoolOutline className="text-xl flex-shrink-0 mt-1" />
                <span className="break-words">{name}</span>
              </div>

              {role && (
                <div className="text-gray-700 dark:text-gray-300 font-medium mb-1 flex items-start gap-2">
                  <IoBookOutline className="text-secondary text-sm flex-shrink-0 mt-1" />
                  <span className="break-words">{role}</span>
                </div>
              )}

              <div className="text-gray-500 dark:text-gray-400 text-sm mb-2 flex items-start gap-2">
                <IoCalendarOutline className="text-sm flex-shrink-0 mt-1" />
                <span className="break-words">{period}</span>
              </div>
            </div>
          </div>

          {/* Right side - content */}
          <div className="md:w-1/2">
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
    <div className="flex flex-col gap-12  py-6">
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
