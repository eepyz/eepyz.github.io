import { EXPERIENCES } from '../types';

interface ExperiencesProps {
  experiences: EXPERIENCES[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col gap-10 py-10">
      {experiences.map(({ name, period, role, description, link }) => (
        <div key={name} className="md:grid md:grid-cols-[_1fr_2fr]">
          <div>
            <div className="text-lg font-semibold break-words whitespace-pre-line">{name}</div>
            <div>{role}</div>
            <div className="text-[#adadad] font-light">{period}</div>
            <a href={link} className="hover:underline text-[#cccccc] ">
              {link}
            </a>
          </div>
          <div>
            {description.title && (
              <div className="w-fit mb-3 text-[17.5px] text-[#8b8b8b] font-medium">{description.title}</div>
            )}
            <ul className="list-disc list-inside flex flex-col gap-4">
              {description.contents.map((content, idx) => (
                <li key={idx} className="font-semibold break-words whitespace-pre-line">
                  <span className="font-semibold">{content.main}</span>
                  <span className="block font-normal">{content.sub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
