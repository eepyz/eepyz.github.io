import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../types';

interface ExperiencesProps {
  experiences: EXPERIENCE[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col gap-12 py-6">
      {experiences.map(({ name, period, role, description, link, href }, index) => (
        <motion.div
          key={name}
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}>
          {/* Timeline connector */}
          {index < experiences.length - 1 && (
            <div className="absolute left-4 top-8 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary/50 to-primary/5 hidden md:block"></div>
          )}

          <div className="flex flex-col md:flex-row gap-6">
            {/* Timeline dot */}
            <div className="hidden md:flex w-8 h-8 rounded-full bg-primary/10 border border-primary/30 shadow-glow flex-shrink-0 items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-slow"></div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-6 p-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
              {/* Left side - details */}
              <div className="md:w-1/3">
                <Link to={href as string} className="text-xl font-bold text-primary hover:underline block mb-2">
                  {name}
                </Link>
                {role && <div className="text-gray-700 dark:text-gray-300 font-medium mb-1">{role}</div>}
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">{period}</div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline inline-flex items-center group">
                    <span>웹사이트 방문</span>
                    <svg
                      className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Right side - content */}
              <div className="md:w-2/3">
                {description.title && (
                  <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{description.title}</div>
                )}

                <ul className="space-y-4">
                  {description.contents.map((content, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 + idx * 0.05, duration: 0.3 }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-gray-200">{content.main}</div>
                        {content.sub && (
                          <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">{content.sub}</div>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
