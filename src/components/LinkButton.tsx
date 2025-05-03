import { Link } from '../types';

export function LinkButton({ url, type }: Link) {
  return <a href={url}>{type}</a>;
}
