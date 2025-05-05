import { EXPERIENCES, Link } from '../types';
import { IoLogoGithub } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';
import { IoIosPaper } from 'react-icons/io';

export const LINKS: Link[] = [
  { type: 'Github', icon: <IoLogoGithub />, url: 'https://github.com/eepyz' },
  { type: 'LinkedIn', icon: <IoLogoLinkedin />, url: 'https://www.linkedin.com/in/eepyzmh/' },
  { type: 'Email', icon: <IoIosMail />, url: 'eepy2.23@gmail.com' },
  { type: 'Blog', icon: <IoIosPaper />, url: 'https://velog.io/@eepy/posts' },
];

export const SKILLS = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Three.js'];

export const PROJECTS: EXPERIENCES[] = [
  {
    name: '디저비',
    role: '프론트엔드 개발자',
    period: '2025.02 - 2025.04',
    description: {
      title: '',
      contents: [''],
    },
    link: '',
  },
  {
    name: 'VS.GG',
    role: '프론트엔드 개발자',
    period: '2024.04 - 2025.06',
    description: {
      title: '',
      contents: [''],
    },
    link: '',
  },
  {
    name: '헤아림',
    role: '프론트엔드 개발자',
    period: '2021.12 - 2024.04',
    description: {
      title: '',
      contents: [''],
    },
    link: '',
  },
];

export const EDUCATION: EXPERIENCES[] = [
  {
    name: '모두의 연구소 웹 프론트엔드 부트캠프',
    period: '2024.10 - 2025.01',
    description: {
      title: '',
      contents: [''],
    },
    link: '',
  },
  {
    name: '항해 99 플러스 프론트엔드',
    period: '2024.06 - 2024.08',
    description: {
      title: '',
      contents: [''],
    },
    link: '',
  },
];
