import { Link } from '../types';
const onClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
export function LinkButton({ url, icon }: Link) {
  return (
    <button
      onClick={() => onClick(url)}
      className="cursor-pointer w-8 h-8 rounded-sm bg-black text-white overflow-hidden flex items-center justify-center">
      <span className="w-full h-full flex items-center justify-center text-xl">{icon}</span>
    </button>
  );
}
