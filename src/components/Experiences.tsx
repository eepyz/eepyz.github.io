import { EXPERIENCES } from '../types';

interface ExperiencesProps {
  experiences: EXPERIENCES[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="flex flex-col gap-20 py-10 ">
      {experiences.map(({ name, period, role, description, link }) => (
        <div key={name} className="md:grid md:grid-cols-[_1fr_2fr] flex flex-col">
          <div className="text-center md:text-start">
            <div className="text-2xl md:text-lg font-bold break-words whitespace-pre-line">{name}</div>
            <div className="hidden md:block">
              <div>{role}</div>
              <div className="text-[#adadad] font-light">{period}</div>
              <a href={link} className="hover:underline text-[#cccccc] ">
                {link}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {description.title && (
              <div className="w-full text-center md:text-start md:mb-3 text-[17.5px] text-[#8b8b8b] font-medium">
                {description.title}
              </div>
            )}
            <div className="flex flex-col md:hidden text-center md:text-start mb-4">
              <div className="text-[#adadad] font-light">{period}</div>
              <div>
                <a href={link} className="hover:underline text-[#cccccc] ">
                  {link}
                </a>
              </div>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-4 w-3/4 md:w-full">
              {description.contents.map((content, idx) => (
                <li key={idx} className="break-words whitespace-pre-line">
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
