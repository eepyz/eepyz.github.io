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
          main: '🔐 소셜 로그인',
          sub: '• Apple, Kakao OAuth 연동 및 콜백 처리 흐름 설계\n• 일반/사장님 계정 통합 로그인 UI 구성\n• JWT 토큰과 deviceId를 HttpOnly 쿠키로 관리하여 보안성 강화',
        },
        {
          main: '🗺 지도 기반 가게 탐색',
          sub: '• Kakao Maps SDK 연동 및 사용자 위치 기반 초기화\n• 맛집 키워드/태그 필터링 및 가게 마커 렌더링\n • 클러스터링 알고리즘 적용으로 대규모 마커 처리 성능 개선',
        },
        {
          main: '📍 마커 클릭 → 바텀시트 UI',
          sub: '• 가게 마커 클릭 시 바텀시트를 통해 요약 정보 표시\n• 쿼리스트링 기반 상태 동기화 및 사용자 이동 흐름 구성\n• 바텀시트 애니메이션 구현\n• 사용자 위치와 가게 간의 거리 계산 및 표시 기능',
        },
        {
          main: '🧁 가게 상세 페이지',
          sub: '• 가게 정보, 메뉴, 리뷰, 가게 저장 기능 제공\n• 한줄 리뷰 작성/수정/삭제 기능 구현\n',
        },
        {
          main: '🏪 사장님 가게 등록',
          sub: '• 다단계 가게 등록 폼 구성 (가게 기본정보, 운영시간/브레이크 타임(타임 피커 구현), 휴무일 선택), 메뉴 등록 등)\n •Context API를 활용한 단계별 상태 관리 \n',
        },
        {
          main: '📱 반응형 UI',
          sub: '• Tailwind CSS를 활용해 모바일 환경에 최적화된 반응형 구성',
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
          main: '🔐 인증 시스템 구축',
          sub: '• NextAuth.js로 네이버 로그인과 JWT 기반 인증 흐름 구축',
        },
        {
          main: '📝 게시글 관리 시스템',
          sub: '• React Hook Form과 React Quill을 결합해 안정적인 게시글 작성 UI 구성',
        },
        {
          main: '📊 데이터 시각화',
          sub: '• Chart.js를 사용해 승률 및 과실 비율을 직관적으로 시각화',
        },
        {
          main: '🗳️ 투표 기반 피드백 UX',
          sub: '• 챔피언 투표 기능과 투표 결과 기반 피드백 인터페이스 구현 (막대 차트, 투표율 강조)',
        },
        {
          main: '🧭 Next.js App Router 설계',
          sub: '• 폴더 단위 라우팅 구조로 페이지 분리, 사용자 흐름에 따른 조건부 렌더링 처리',
        },
        {
          main: '💬 댓글 기능',
          sub: '• 참여형 기능으로 댓글 작성, 사용자 상태에 따른 인터페이스 분기',
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
          main: '🎮 3D STL 렌더링 및 상호작용 UI 구성',
          sub: '• Three.js 기반 STL Geometry 파싱 및 React-Three-Fiber를 활용한 회전/줌/클릭 인터페이스 구현',
        },
        {
          main: '🎯 선택 기반 경계 추출 UX',
          sub: '• 마우스 클릭 시 법선 벡터 각도 기반으로 인접 삼각형을 자동 탐색하고 경계 그룹을 색상으로 시각화',
        },
        {
          main: '📂 사용자 업로드 → 실시간 반영',
          sub: '• 브라우저에서 STL 파일 업로드 시 geometry 파싱 및 렌더링까지 실시간 적용 흐름 구현',
        },
        {
          main: '🧱 Mesh 별 상태 동기화 구조',
          sub: '• 각 메쉬의 vertex/face 정보를 MeshInfo로 저장하고 Redux 상태에 연동하여 경계 및 시뮬레이션에 활용',
        },
        {
          main: '🧩 상태 기반 3D UI 시스템 구성',
          sub: '• Redux 상태와 Three.js 렌더링 상태를 연동하여 시뮬레이션 UI 조작 및 실시간 시각화 구현',
        },
        {
          main: '🧭 키보드 조작 및 툴 제어',
          sub: '• Q/W/E/R/T 등 단축키 바인딩을 통한 시뮬레이션 도구 토글 및 UI 피드백 제공',
        },
        {
          main: '📐 조건 입력 기반 물리 환경 설정',
          sub: '• 온도, 속도, 압력, 유체 종류 등을 입력 UI로 구성하고 각 상태를 Redux로 전역 관리',
        },
        {
          main: '🖼️ STL 파일 출력 인터페이스',
          sub: '• STLExporter와 Exporter.js를 연동하여 브라우저에서 직접 ASCII STL 파일 내보내기 구현',
        },
        {
          main: '👩‍💻 풀스택 개발 경험',
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
