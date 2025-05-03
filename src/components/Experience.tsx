import { EXPERIENCES } from '../types';

export function Experience({ name, period, role, description, link }: EXPERIENCES) {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{role}</div>
        <div>{period}</div>
        <div>{link}</div>
      </div>
      <div>
        <div>{description.title}</div>
        <ol>
          {description.contents.map((content) => (
            <li>{content}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
