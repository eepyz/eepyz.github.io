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

export interface EXPERIENCES {
  name: string;
  role?: string;
  period: string;
  description: Description;
  link?: string;
  href?: string;
}
