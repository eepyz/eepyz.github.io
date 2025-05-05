import { ReactNode } from 'react';

export interface Link {
  type: string;
  icon: ReactNode;
  url: string;
}

export interface Description {
  title: string;
  contents: string[];
}

export interface EXPERIENCES {
  name: string;
  role?: string;
  period: string;
  description: Description;
  link?: string;
}
