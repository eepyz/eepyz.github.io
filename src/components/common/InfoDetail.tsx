import { motion } from 'framer-motion';

export function InfoDetail() {
  const sentences = [
    '기능 구현을 넘어서, 사용자 경험을 중심으로 문제를 해결하는 프론트엔드 개발자입니다.',
    '로딩 지연, 느린 상호작용처럼 사용자가 체감하는 성능 문제에 민감하게 반응하며,',
    'lazy load, 캐싱 전략, 리소스 분리 등을 직접 적용하고 개선해왔습니다.',
    "코드가 단순히 동작하는 것을 넘어서, '이 코드가 사용자에게 어떤 경험을 줄까?'를 항상 먼저 생각합니다.",
    '앞으로도 사용자의 흐름을 주도적으로 이해하고, 팀 간 간극을 메우는 개발자로 성장해나가고자 합니다.',
  ];

  return (
    <motion.div
      className="w-full md:w-3/4 rounded-2xl "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        {sentences.map((sentence, index) => (
          <motion.p
            key={index}
            className="leading-relaxed"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}>
            {sentence}
          </motion.p>
        ))}
      </div>

      <motion.div
        className="mt-4 flex gap-4 text-nowrap flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          #성능최적화
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
          #사용자경험
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
          #프론트엔드
        </span>
      </motion.div>
    </motion.div>
  );
}
