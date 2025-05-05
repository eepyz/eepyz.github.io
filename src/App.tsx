import { Experiences } from './components/Experiences';
import { InfoDetail } from './components/InfoDetail';
import { LinkButton } from './components/LinkButton';
import { MyInfo } from './components/MyInfo';
import { ProfileImage } from './components/ProfileImage';
import { SkillChip } from './components/SkillChip';
import { Title } from './components/Title';
import { EDUCATION, LINKS, PROJECTS, SKILLS } from './consts';
function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-screen-md">
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
            <div className="flex justify-between items-center py-14">
              <ProfileImage />
              <InfoDetail />
            </div>
            <div className="flex flex-wrap gap-1 items-center">
              <div className="text-xl font-medium mr-2">Skills</div>
              {SKILLS.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
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
      <footer></footer>
    </div>
  );
}

export default App;
