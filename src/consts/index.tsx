import { EXPERIENCE, Link, Project } from '../types';
import { IoLogoGithub } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';
import { IoIosPaper } from 'react-icons/io';

export const LINKS: Link[] = [
  { type: 'Github', icon: <IoLogoGithub />, url: 'https://github.com/eepyz' },
  { type: 'LinkedIn', icon: <IoLogoLinkedin />, url: 'https://www.linkedin.com/in/eepyzmh/' },
  { type: 'Email', icon: <IoIosMail />, url: 'mailto:eepy2.23@gmail.com' },
  { type: 'Blog', icon: <IoIosPaper />, url: 'https://velog.io/@eepy/posts' },
];

export const SKILLS = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Three.js', 'React-Three-Fiber'];

export const PROJECTS: Project[] = [
  {
    name: '디저비',
    role: '프론트엔드 개발자',
    period: '2025.02 - 2025.04',
    description: {
      title: '사용자 취향에 따른 디저트 가게 추천 플랫폼',
      contents: [
        {
          main: '위치 기반 주변 가게 조회 및 상호작용 기능',
          sub: 'Kakao Map SDK로 위치 기반 가게 탐색 기능 제공, 클러스터·마커 리소스 정리로 성능 최적화 및 지도 안정성 확보',
        },
        {
          main: '인증 및 상태 관리',
          sub: 'JWT 인증 토큰과 deviceId를 HttpOnly 쿠키로 관리, Context 기반 상태 관리로 폼 흐름 안정화',
        },
        {
          main: '성능 최적화',
          sub: '이미지 priority 설정 및 WebP 포맷 적용으로 초기 로딩 시간 2초 단축, 모달 lazy load와 로딩 UI로 TBT 최적화(250ms → 30ms)',
        },
      ],
    },
    link: 'https://desserbee.com',
    logo: '/images/desserbee-logo.webp',
    img: '/images/desserbee.webp',
    color: '#ffd268',
    href: '/desserbee',
  },
  {
    name: 'VS.GG',
    role: '프론트엔드 개발자',
    period: '2024.05 - 2024.06',
    description: {
      title: '리그 오브 레전드 과실 판결 커뮤니티 플랫폼',
      contents: [
        {
          main: '인증 시스템 구축',
          sub: 'NextAuth.js로 네이버 로그인과 JWT 기반 인증 흐름 구축',
        },
        {
          main: '게시글 관리 시스템',
          sub: 'React Hook Form과 React Quill을 결합해 안정적인 게시글 작성 UI 구성',
        },
        {
          main: '데이터 시각화',
          sub: 'Chart.js를 사용해 승률 및 과실 비율을 직관적으로 시각화',
        },
      ],
    },
    link: 'https://vsgg.co.kr/',
    logo: '/images/vs-gg-logo.png',
    img: '/images/vsgg.webp',
    color: '#ffffff',
    href: '/vsgg',
  },
  {
    name: '헤아림 주식회사',
    role: '프론트엔드 개발자',
    period: '2021.12 - 2024.04',
    description: {
      title: '웹 기반 유체역학 시뮬레이션 시스템',
      contents: [
        {
          main: '3D 렌더링 최적화',
          sub: 'HalfEdge 기반 삼각망 구조 구현으로 렌더링 시간을 분 단위에서 초 단위로 단축',
        },
        {
          main: '3D 모델 조작 시스템',
          sub: 'Three.js 내부 구조 분석 및 최적화를 통한 대규모 모델 처리 성능 개선',
        },
        {
          main: '풀스택 개발 경험',
          sub: '프론트엔드, 디자인, Node.js 백엔드와 AWS 배포까지 직접 담당',
        },
      ],
    },
    logo: '/images/hearim-logo.webp',
    color: '#426eba',
    img: '/images/hearim.webp',
    href: '/hearim',
  },
];

export const EDUCATION: EXPERIENCE[] = [
  {
    name: '모두의 연구소',
    role: '3D 인터랙티브 웹 개발',
    period: '2024.10 - 2025.01',
    description: {
      title: '',
      contents: [
        { main: '웹 표준과 접근성의 중요성을 이해를 통한 사용자 친화적인 웹 서비스 구현' },
        { main: 'Three.js를 활용한 WebGL의 핵심 개념 학습 및 실습' },
        { main: 'MySQL, Node.js 백엔드 구축 및 데이터베이스 설계' },
      ],
    },
    link: '',
  },
  {
    name: '팀스파르타',
    role: '항해 플러스 프론트엔드',
    period: '2024.06 - 2024.08',
    description: {
      title: '',
      contents: [
        { main: 'React 핵심 개념 학습' },
        { main: '클린 코드 작성법과 VAC 패턴을 활용한 함수형 프로그래밍, FSD 학습 및 적용' },
        { main: 'AWS와 Github Action을 활용한 CI/CD 구축을 실습, 배포 자동화 경험' },
        { main: 'vitest, testing-library/react, MSW 등을 사용한 테스팅, TDD 적용' },
        { main: '프론트엔드 및 인프라 최적화 방법 학습, 성능 개선 기술 습득' },
      ],
    },
    link: '',
  },
  {
    name: '계명대학교',
    role: '유아교육과',
    period: '2016.03 - 2020.02',
    description: {
      title: '',
      contents: [{ main: '학사 졸업' }],
    },
    link: '',
  },
];
