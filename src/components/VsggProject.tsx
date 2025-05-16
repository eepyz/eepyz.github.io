import { motion } from 'framer-motion';

export default function VsggProject() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center">
        VS.GG – 리그 오브 레전드 과실 판결 커뮤니티 플랫폼
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8">
        <h2 className="text-xl font-semibold mb-2">프로젝트 목표</h2>
        <p className="text-base leading-relaxed">
          최신 Next.js(App Router)와 다양한 프론트엔드 기술을 활용해, 리그 오브 레전드 유저들이 과실 판결, 투표, 통계
          시각화, 커뮤니티 활동을 할 수 있는 웹 플랫폼을 개발했습니다.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8">
        <h2 className="text-xl font-semibold mb-2">핵심 기술 및 성과</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Next.js 13+ App Router</b> 구조로 폴더 기반 라우팅, 서버/클라이언트 컴포넌트 분리
          </li>
          <li>
            <b>NextAuth.js</b>로 네이버 등 소셜 로그인 및 JWT 기반 인증 흐름 구축
          </li>
          <li>
            <b>React Hook Form</b>으로 폼 상태 관리, <b>React Quill</b>로 WYSIWYG 게시글 에디터 구현
          </li>
          <li>
            <b>Chart.js</b>로 승률, 과실 비율 등 통계 데이터 시각화
          </li>
          <li>
            <b>테스팅</b>: MSW로 목 API 환경 구축, vitest/testing-library로 컴포넌트/로직 테스트
          </li>
          <li>
            <b>Tailwind CSS</b>로 빠르고 일관된 스타일링
          </li>
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-8">
        <h2 className="text-xl font-semibold mb-2">주요 역할</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>커뮤니티(게시글, 댓글, 투표) 시스템 설계 및 구현</li>
          <li>소셜 로그인 및 인증 흐름 구축</li>
          <li>통계 데이터 시각화(Chart.js)</li>
          <li>폼 UX 개선 및 에디터 개발</li>
          <li>테스팅 환경 구축 및 테스트 코드 작성</li>
        </ul>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-xl font-semibold mb-2">기술 스택</h2>
        <ul className="list-disc list-inside">
          <li>
            <b>Frontend</b>: Next.js, React, TypeScript, Tailwind CSS, React Hook Form, Chart.js, React Quill,
            NextAuth.js
          </li>
          <li>
            <b>Testing</b>: vitest, testing-library/react, MSW
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
