import { motion, useScroll, useTransform } from 'framer-motion';
import { EDUCATION, LINKS, SKILLS } from './consts';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { MyInfo } from './components/common/MyInfo';
import { LinkButton } from './components/common/LinkButton';
import { Title } from './components/common/Title';
import { ProfileImage } from './components/common/ProfileImage';
import { InfoDetail } from './components/common/InfoDetail';
import { SkillChip } from './components/common/SkillChip';
import { Experiences } from './components/common/Experiences';
import { Projects } from './components/projects';
import { useEffect, useRef, useState } from 'react';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glassmorphism shadow-soft transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {theme === 'dark' ? <IoSunny className="text-yellow-300 text-xl" /> : <IoMoon className="text-primary text-xl" />}
    </motion.button>
  );
}

function AppContent() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  // 스크롤 애니메이션을 위한 섹션 참조
  const aboutSectionRef = useRef<HTMLElement>(null);
  const projectSectionRef = useRef<HTMLElement>(null);
  const educationSectionRef = useRef<HTMLElement>(null);

  // 섹션의 가시성 상태
  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);

  // Intersection Observer 설정
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      });
    }, observerOptions);

    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjectVisible(true);
        }
      });
    }, observerOptions);

    const educationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setEducationVisible(true);
        }
      });
    }, observerOptions);

    if (aboutSectionRef.current) {
      aboutObserver.observe(aboutSectionRef.current);
    }

    if (projectSectionRef.current) {
      projectObserver.observe(projectSectionRef.current);
    }

    if (educationSectionRef.current) {
      educationObserver.observe(educationSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) aboutObserver.unobserve(aboutSectionRef.current);
      if (projectSectionRef.current) projectObserver.unobserve(projectSectionRef.current);
      if (educationSectionRef.current) educationObserver.unobserve(educationSectionRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* 배경 효과 */}
      <motion.div className="fixed inset-0 -z-10 animated-gradient-bg" style={{ y: backgroundY, opacity }} />
      <div className="fixed inset-0 -z-5 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm" />

      <ThemeToggle />

      <div className="flex justify-center">
        <main className="w-full max-w-4xl px-4 md:px-8 py-20">
          {/* 헤더 */}
          <header className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <MyInfo />
            <motion.div
              className="flex gap-3 justify-center items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}>
              {LINKS.map((link, index) => (
                <motion.div
                  key={link.type}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}>
                  <LinkButton {...link} />
                </motion.div>
              ))}
            </motion.div>
          </header>

          {/* About me */}
          <section ref={aboutSectionRef} className={`section-fade-up ${aboutVisible ? 'in-view' : ''}`}>
            <Title title="About Me" />
            <div className="card p-6 md:p-8">
              <div className="flex justify-between items-center pb-8 flex-col md:flex-row gap-8">
                <ProfileImage />
                <InfoDetail />
              </div>
              <div className="flex md:flex-row flex-col items-center gap-4 mt-6">
                <motion.div
                  className="text-xl font-medium text-primary"
                  initial={{ opacity: 0 }}
                  animate={aboutVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}>
                  Skills
                </motion.div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {SKILLS.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={aboutVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.05 }}>
                      <SkillChip skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Project */}
          <section ref={projectSectionRef} className={`section-fade-up ${projectVisible ? 'in-view' : ''}`}>
            <Title title="Project" />
            <div className="card p-6 relative overflow-hidden">
              <motion.div
                className="absolute right-0 top-0 w-40 h-40 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl -z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute left-0 bottom-0 w-40 h-40 rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl -z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div className="relative z-10">
                <Projects />
              </div>
            </div>
          </section>

          {/* Education */}
          <section ref={educationSectionRef} className={`section-fade-up ${educationVisible ? 'in-view' : ''}`}>
            <Title title="Education" />
            <div className="card p-6">
              <Experiences experiences={EDUCATION} />
            </div>
          </section>

          {/* Footer */}
          <motion.footer
            className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            <div className="mb-2">© 2023 신명희. All rights reserved.</div>
            <div>
              Made with <span className="text-red-500">❤️</span> using React, TypeScript & Tailwind CSS
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
