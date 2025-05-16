import { ReactNode } from 'react';

export interface Link {
  type: string;
  icon: ReactNode;
  url: string;
}

export interface Contents {
  main: string;
  sub?: string;
}

export interface Description {
  title: string;
  contents: Contents[];
}

export interface Project {
  name: string;
  role?: string;
  period: string;
  description: Description;
  link?: string;
  href?: string;
  color?: string;
  logo?: string;
  img?: string;
}

export interface EXPERIENCE {
  name: string;
  role?: string;
  period: string;
  description: Description;
  link?: string;
  href?: string;
}
