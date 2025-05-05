import { EXPERIENCES, Link } from '../types';
import { IoLogoGithub } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io';
// import { IoIosMail } from 'react-icons/io';
// import { IoIosPaper } from 'react-icons/io';

export const LINKS: Link[] = [
  { type: 'Github', icon: <IoLogoGithub />, url: 'https://github.com/eepyz' },
  { type: 'LinkedIn', icon: <IoLogoLinkedin />, url: 'https://www.linkedin.com/in/eepyzmh/' },
  // { type: 'Email', icon: <IoIosMail />, url: 'mailto:eepy2.23@gmail.com' },
  // { type: 'Blog', icon: <IoIosPaper />, url: 'https://velog.io/@eepy/posts' },
];

export const SKILLS = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Three.js'];

export const PROJECTS: EXPERIENCES[] = [
  {
    name: '디저비',
    role: '프론트엔드 개발자',
    period: '2025.02 - 2025.04',
    description: {
      title: '취향 기반 디저트 발견 플랫폼',
      contents: [
        {
          main: '지도 및 가게 기능 개발 및 최적화',
          sub: '사용자 친화적 지도, 바텀시트, 상세 페이지로 가게 탐색 속도와 UX 개선',
        },
        {
          main: '계정 통합 및 사장님 기능 구현',
          sub: '사용자→사장님 전환, 가게 등록 기능으로 단일 플랫폼 내 비즈니스 운영 기능 완성',
        },
        { main: '소셜 로그인 연동', sub: '카카오·애플 로그인 구현으로 사용자 진입 장벽 최소화' },
      ],
    },
    link: 'https://desserbee.com',
  },
  {
    name: 'VS.GG',
    role: '프론트엔드 개발자',
    period: '2024.04 - 2024.06',
    description: {
      title: '리그 오브 레전드 과실 판결 커뮤니티 플랫폼',
      contents: [
        {
          main: '사용자 인증 및 회원 관리',
          sub: 'NextAuth.js를 이용한 네이버 소셜 로그인 구현, JWT 기반 인증 시스템 및 다단계 검증 프로세스 적용을 통해 로그인 및 회원가입 시스템 구축',
        },
        {
          main: '게시글 관리 및 상호작용',
          sub: 'React Quill, React Hook Form, 인피니트 스크롤을 적용하여 복잡한 게시글 작성/조회 기능 구현',
        },
        {
          main: '데이터 시각화 및 통계',
          sub: 'Chart.js로 승률 및 과실 비율 시각화를 위한 차트 구현하여 게임 통계를 직관적으로 표현하고 데이터 시각화',
        },
      ],
    },
    link: 'https://vsgg.co.kr/',
  },
  {
    name: '헤아림',
    role: '프론트엔드 개발자',
    period: '2021.12 - 2024.04',
    description: {
      title: '웹 기반 유체역학 시뮬레이션 시스템',
      contents: [
        {
          main: '3D 렌더링 및 실시간 데이터 처리',
          sub: 'React-Three-Fiber를 사용해 부드러운 3D 렌더링 구현 후 Redux Toolkit을 통해 실시간 입력값 처리',
        },
        {
          main: '3D 모델 자료 구조 개선',
          sub: 'HalfEdge 이론을 도입한 자체 개발 자료구조를 통해 3D 모델 자료 구조를 재설계하고 대규모 모델의 삼각형 순회 및 탐색 처리 시간을 10분에서 1~10초로 단축',
        },
        {
          main: '직관적 UI/UX 구축',
          sub: '아이콘 클릭을 통한 3D 모델 조작 및 데이터 입력으로 복잡한 웹 시뮬레이션의 진입 장벽 낮추고 사용자 친화적인 인터페이스 구현',
        },
      ],
    },
    link: '',
  },
];

export const EDUCATION: EXPERIENCES[] = [
  {
    name: `모두의연구소  \n 프론트엔드 개발 과정 3기`,
    period: '2024.10 - 2025.01',
    description: {
      title: '',
      contents: [
        { main: '웹 표준과 접근성의 중요성을 이해를 통한 사용자 친화적인 웹 서비스 구현' },
        {
          main: 'Three.js를 활용한 WebGL의 핵심 개념 학습 및 실습',
        },
        {
          main: 'MySQL, Node.js 백엔드 구축 및 데이터베이스 설계 ',
        },
      ],
    },
    link: '',
  },
  {
    name: '항해 99 플러스 프론트엔드 2기',
    period: '2024.06 - 2024.08',
    description: {
      title: '',
      contents: [
        { main: 'React 핵심 개념 학습' },
        {
          main: '클린 코드 작성법과 VAC 패턴을 활용한 함수형 프로그래밍, FSD 학습 및 적용',
        },
        { main: 'AWS와 Github Action을 활용한 CI/CD 구축을 실습, 배포 자동화 경험' },
        { main: 'vitest, testing-library/react, MSW 등을 사용한 테스팅, TDD 적용' },
        { main: '프론트엔드 및 인프라 최적화 방법 학습, 성능 개선 기술 습득' },
      ],
    },
    link: '',
  },
];
