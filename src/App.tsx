import { motion } from 'framer-motion';
import { EDUCATION, LINKS, PROJECTS, SKILLS } from './consts';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { MyInfo } from './components/common/MyInfo';
import { LinkButton } from './components/common/LinkButton';
import { Title } from './components/common/Title';
import { ProfileImage } from './components/common/ProfileImage';
import { InfoDetail } from './components/common/InfoDetail';
import { SkillChip } from './components/common/SkillChip';
import { Experiences } from './components/common/Experiences';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm transition-colors duration-300 dark:bg-white dark:bg-opacity-10 bg-black">
      {theme === 'dark' ? <IoSunny className="text-2xl" /> : <IoMoon className="text-white text-2xl" />}
    </button>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-900'
      }`}>
      <div className="fixed inset-0 -z-10"></div>

      <ThemeToggle />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center">
        <main className="w-full max-w-[800px] px-4">
          {/* 헤더 */}
          <header className="flex w-full flex-col md:flex-row text-center md:text-start md:justify-between pt-10 gap-4">
            <MyInfo />
            <div className="flex gap-1 justify-center items-start">
              {LINKS.map((link) => (
                <LinkButton key={link.type} {...link} />
              ))}
            </div>
          </header>

          {/* About me */}
          <section>
            <Title title="About Me" />
            <div>
              <div className="flex justify-between items-center py-14 flex-col md:flex-row gap-4">
                <ProfileImage />
                <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">
                  <InfoDetail />
                  <div className="hidden md:block"></div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-2">
                <div className="text-xl font-medium mr-2">Skills</div>
                <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                  {SKILLS.map((skill) => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Project */}
          <section>
            <Title title="Project" />
            <Experiences experiences={PROJECTS} />
          </section>

          {/* Education */}
          <section>
            <Title title="Education" />
            <Experiences experiences={EDUCATION} />
          </section>
        </main>
      </motion.div>
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
