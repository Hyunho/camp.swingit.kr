# 프로젝트 구조

## 디렉토리 구조 (Directory Layout)
- `src/app`: Next.js App Router 페이지 및 레이아웃
- `src/components`: 재사용 가능한 UI 컴포넌트
- `src/lib`: 유틸리티 함수 및 설정 파일
- `src/styles`: 전역 스타일 (Tailwind CSS, Prism 테마 등)
- `src/images`: 정적 이미지 에셋
- `public`: 루트에서 제공되는 정적 파일

## 주요 파일 (Key Files)
- `next.config.mjs`: Next.js 설정 파일
- `tailwind.config.ts`: Tailwind CSS 설정 파일
- `typography.ts`: 타이포그래피 관련 설정
- `.cursorrules`: AI 어시스턴트(Cursor 등)를 위한 규칙 파일

## 명명 규칙 (Naming Conventions)
- **파일**:
  - 컴포넌트: PascalCase (예: `Header.tsx`)
  - 유틸리티: camelCase (예: `formatDate.ts`)
  - 페이지/레이아웃: `page.tsx`, `layout.tsx` (Next.js 컨벤션)
