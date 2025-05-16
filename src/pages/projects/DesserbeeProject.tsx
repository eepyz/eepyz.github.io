import { motion } from 'framer-motion';

export default function DesserbeeProject() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center">
        디저비(Desserbee) – 취향 기반 디저트 가게 추천 플랫폼
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8">
        <h2 className="text-xl font-semibold mb-2">프로젝트 개요</h2>
        <p className="text-base leading-relaxed">
          디저비는 지도를 통해 주변 가게를 탐색하고, 개인 취향에 맞는 가게 필터링을 제공하는 플랫폼입니다. 카카오 맵
          연동, 커뮤니티, 사장님 대시보드 등 다양한 기능을 갖춘 통합 디저트 플랫폼입니다.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8">
        <h2 className="text-xl font-semibold mb-2">주요 기능</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>카카오 맵 연동, 위치 기반 매장 탐색 및 필터링</li>
          <li>취향 설문 기반 맞춤 추천, 키워드 검색</li>
          <li>커뮤니티(리뷰, 메이트 모집, 즐겨찾기, 댓글 등)</li>
          <li>사장님 대시보드(매장 등록, 운영 관리, 쿠폰·공지 설정)</li>
          <li>Apple/Kakao 소셜 로그인, 마이페이지, 리뷰·댓글 기능</li>
          <li>다국어(i18n) 지원</li>
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-8">
        <h2 className="text-xl font-semibold mb-2">핵심 기술 및 구조</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>모노레포 기반 대규모 프론트엔드 프로젝트(TurboRepo, pnpm workspace)</li>
          <li>Next.js 기반 웹 애플리케이션(App Router)</li>
          <li>공통 디자인 시스템, 유틸리티, API/서비스 레이어 등 모듈화</li>
          <li>클린 아키텍처, 다국어(i18n) 지원</li>
          <li>Vercel 배포 환경</li>
        </ul>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-xl font-semibold mb-2">기술 스택</h2>
        <ul className="list-disc list-inside">
          <li>
            <b>Frontend</b>: Next.js, React, TypeScript, Tailwind CSS, React Hook Form
          </li>
          <li>
            <b>빌드/개발</b>: pnpm, TurboRepo, MSW
          </li>
          <li>
            <b>배포</b>: Vercel
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
