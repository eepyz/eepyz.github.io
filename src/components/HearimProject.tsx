import { motion } from 'framer-motion';

export default function HearimProject() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center">
        헤아림 주식회사 – 웹 기반 유체역학 시뮬레이션
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8">
        <h2 className="text-xl font-semibold mb-2">프로젝트 목표</h2>
        <p className="text-base leading-relaxed">
          웹 환경에서 대용량 3D 유체역학 시뮬레이션을 시각화하고, 실시간으로 조작할 수 있는 시스템을 개발했습니다. STL
          등 복잡한 3D 모델의 렌더링과 상호작용 성능을 극대화하는 것이 핵심 목표였습니다.
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
            <b>Three.js + React(react-three-fiber)</b>로 3D 시뮬레이션을 자연스럽게 구현
          </li>
          <li>
            <b>반모서리(HalfEdge) 기반 삼각망 자료구조</b> 직접 구현
            <br />
            - STL 등 복잡한 3D 모델의 탐색/순회/조작을 빠르게 처리
            <br />- 기존 방식 대비 탐색 속도를 <b>분 단위 → 초 단위</b>로 대폭 단축
            <br />- Three.js 내부 구조와 논문을 참고하여 최적화
          </li>
          <li>
            <b>실시간 데이터 처리</b>: Redux Toolkit 등으로 입력값/상태를 효율적으로 관리
          </li>
          <li>
            <b>풀스택 경험</b>: 프론트엔드(React, Three.js)뿐 아니라 디자인, Node.js 백엔드, AWS 배포까지 직접 담당
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
          <li>3D 모델의 렌더링 및 실시간 상호작용 기능 개발</li>
          <li>대용량 모델의 탐색/조작 성능 최적화(자료구조 설계 및 직접 구현)</li>
          <li>사용자 친화적 UI/UX 설계 및 구현</li>
          <li>프로젝트 전반의 구조 설계, 성능 개선, 배포 자동화</li>
        </ul>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-xl font-semibold mb-2">기술 스택</h2>
        <ul className="list-disc list-inside">
          <li>
            <b>Frontend</b>: React, Three.js, react-three-fiber, Redux Toolkit, JavaScript(ES6+)
          </li>
          <li>
            <b>Backend/Infra</b>: Node.js, AWS
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
