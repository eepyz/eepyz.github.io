interface TitleProps {
  title: string;
}
export function Title({ title }: TitleProps) {
  return (
    <div>
      <div>{title}</div>
      <div></div>
    </div>
  );
}
