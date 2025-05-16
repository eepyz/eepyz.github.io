interface TitleProps {
  title: string;
}
export function Title({ title }: TitleProps) {
  return (
    <div className="mt-10 flex justify-center flex-col items-center">
      <div className="text-2xl font-light">{title}</div>
      <div className="w-full border"></div>
    </div>
  );
}
