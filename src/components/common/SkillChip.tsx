interface SkillChipProps {
  skill: string;
}
export function SkillChip({ skill }: SkillChipProps) {
  return <div className="bg-[#ab9ee0] rounded-sm px-1 text-white">{skill}</div>;
}
