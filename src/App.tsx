import { Experience } from './components/Experience';
import { InfoDetail } from './components/InfoDetail';
import { LinkButton } from './components/LinkButton';
import { MyInfo } from './components/MyInfo';
import { ProfileImage } from './components/ProfileImage';
import { SkillChip } from './components/SkillChip';
import { Title } from './components/Title';
import { EDUCATION, LINKS, PROJECTS, SKILLS } from './consts';
function App() {
  return (
    <>
      <main>
        <section>
          <MyInfo />
          {LINKS.map((link) => (
            <LinkButton {...link} />
          ))}
        </section>
        <section>
          <Title title="About Me" />
          <div>
            <div>
              <ProfileImage />
              <InfoDetail />
            </div>
            {SKILLS.map((skill) => (
              <SkillChip key={skill} skill={skill} />
            ))}
          </div>
        </section>
        <section>
          <Title title="Project" />
          {PROJECTS.map((project) => (
            <Experience {...project} />
          ))}
        </section>
        <section>
          <Title title="Education" />
          {EDUCATION.map((education) => (
            <Experience {...education} />
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
