# AGENTS.md - 이 저장소를 위한 코딩 가이드라인

## 빌드 명령어

### 개발 및 빌드

```bash
# 개발 서버 시작
npm run dev

# 프로덕션용 빌드
npm run build

# 프로덕션 서버 시작
npm run start

# ESLint 실행
npm run lint
```

### 테스팅

**현재 설정된 테스트 프레임워크가 없습니다.** 이 저장소는 테스트 인프라가缺少되어 있습니다. 다음을 추가하는 것을 고려하세요:

- 단위 테스트를 위한 Jest 또는 Vitest
- 컴포넌트 테스트를 위한 React Testing Library
- e2e 테스트를 위한 Playwright 또는 Cypress

## 프로젝트 구조

### 디렉토리 구성

```
src/
├── app/                 # Next.js App Router 페이지
│   ├── [route]/
│   │   ├── page.tsx     # 라우트 컴포넌트
│   │   └── layout.tsx   # 라우트 레이아웃
├── components/          # 재사용 가능한 UI 컴포넌트
├── lib/                 # 유틸리티 함수와 설정
├── styles/              # 전역 스타일 (Tailwind, Prism)
└── images/              # 정적 이미지 에셋
```

### 파일 명명 규칙

- **컴포넌트**: PascalCase (예: `Button.tsx`, `Header.tsx`)
- **페이지**: `page.tsx` (Next.js App Router)
- **레이아웃**: `layout.tsx`
- **유틸리티**: camelCase (예: `formatDate.ts`)
- **타입**: 구현과 동일한 이름에 `.ts` 확장자 사용

## 코드 스타일 가이드라인

### TypeScript 설정

- **엄격 모드**: 활성화
- **타겟**: ES6
- **경로 매핑**: `@/*`는 `src/*`를 매핑
- **JSX**: React 18 Preserve

### 임포트 구성

항상 다음 순서로 임포트를 구성하세요:

1. **React 및 Next.js 임포트**

   ```typescript
   import React, { useEffect, useRef, useState } from 'react'
   import Image from 'next/image'
   import Link from 'next/link'
   ```

2. **서드파티 라이브러리**

   ```typescript
   import clsx from 'clsx'
   import { Popover, Transition } from '@headlessui/react'
   ```

3. **내부 임포트** (`@/` 별칭 사용)
   ```typescript
   import { Container } from '@/components/Container'
   import { formatDate } from '@/lib/formatDate'
   ```

### 컴포넌트 패턴

#### 컴포넌트 구조

```typescript
'use client' // 클라이언트 컴포넌트에 추가

import { useState } from 'react'

interface ComponentProps {
  // TypeScript로 props 정의
}

export function ComponentName({ prop }: ComponentProps) {
  // 컴포넌트 로직
  return <div className="tailwind-classes">{/* JSX 콘텐츠 */}</div>
}
```

#### 컴파운드 컴포넌트

```typescript
export function Card() {
  return <div className="card-base">{children}</div>
}

Card.Title = function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>
}

Card.Description = function CardDescription({ children }) {
  return <p className="card-description">{children}</p>
}
```

#### Forward Ref 패턴

```typescript
export const Container = forwardRef(function Container(
  { children, className, ...props },
  ref,
) {
  return (
    <div ref={ref} className={clsx('container', className)} {...props}>
      {children}
    </div>
  )
})
```

### TypeScript 패턴

#### 인터페이스 정의

```typescript
interface Article {
  title: string
  description: string
  date: string
}

interface ArticleWithSlug extends Article {
  slug: string
}
```

#### 제네릭 컴포넌트 Props

```typescript
type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)
```

### Tailwind CSS로 스타일링

#### 설정

- **다크 모드**: 클래스 기반 (`darkMode: 'class'`)
- **컨텐츠**: `./src/**/*.{js,jsx,ts,tsx}`
- **플러그인**: `@tailwindcss/typography`, `tailwindcss-animate`

#### 변형 패턴

```typescript
const variantStyles = {
  primary: 'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700',
  secondary: 'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100',
}

className={clsx(
  'base-styles',
  variantStyles[variant],
  className,
)}
```

#### 반응형 디자인

모바일 우선 접근 방식으로 일관된 브레이크포인트 사용:

```typescript
className = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
```

#### 다크 모드 지원

항상 다크 모드 변형을 포함하세요:

```typescript
className = 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100'
```

### 폼 처리

의미론적 HTML과 적절한 접근성 사용:

```typescript
<input
  type="email"
  placeholder="Email address"
  aria-label="Email address"
  required
  className="input-styles"
/>
```

### 이미지 최적화

항상 Next.js Image 컴포넌트 사용:

```typescript
<Image
  src={imageUrl}
  alt={altText}
  width={500}
  height={300}
  className="rounded-lg object-cover"
  priority // 첫 화면 이미지용
/>
```

## 성능 가이드라인

### 이미지 최적화

- 모든 이미지에 `next/image` 사용
- 적절한 `alt` 텍스트 제공
- 적절한 `width`와 `height` 설정
- 첫 화면 이미지에 `priority` 사용
- 반응형 이미지를 위해 부모 `relative` 포지셔닝과 `fill` prop 사용

### 번들 최적화

- 무거운 컴포넌트에 동적 임포트 사용: `const Component = dynamic(() => import('./Component'))`
- Next.js 자동 코드 스플리팅 활용
- Tailwind 클래스 깨끗하게 유지 (자동으로 제거됨)

## 설정 파일

### Prettier 설정

```json
{
  "singleQuote": true,
  "semi": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### ESLint 설정

```json
{
  "extends": "next/core-web-vitals"
}
```

## 콘텐츠 관리

### MDX 지원

- GitHub Flavored Markdown 지원 (`remark-gfm`)
- Prism.js로 구문 강조 (`@mapbox/rehype-prism`)
- 파일 확장자: `.mdx` 및 `.md`
- 메타데이터에 프론트매터 사용

## 환경 변수

### 필수 변수

`.env.local`에 다음을 생성하세요:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Git 워크플로우

### 커밋 패턴

- 가능하면 컨벤셔널 커밋 사용
- 커밋 전에 `npm run lint` 실행
- 프리커밋 훅 미설정 (husky 추가 고려)

## 접근성 가이드라인

### 의미론적 HTML

- 적절한 헤딩 계층 구조 사용
- 모든 이미지에 alt 텍스트 제공
- 의미론적 요소 사용 (`<nav>`, `<main>`, `<section>`)
- 필요한 곳에 ARIA 레이블 포함
- 키보드 네비게이션 지원 보장

## 국제화

### 언어 지원

이 코드베이스는 한국어, 영어, 중국어 콘텐츠를 지원합니다. 다음 패턴을 따르세요:

#### 다국어용 컴포넌트 Props

```typescript
interface Role {
  title: string
  place_en: string
  place_kr: string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}
```

#### 콘텐츠 구조

```typescript
<p className="mt-6 text-lg leading-8 text-gray-600">
  English content here.
</p>
<p className="mt-6 text-lg leading-8 text-gray-600">
  (한국어 내용 여기)
</p>
<p className="mt-6 text-lg leading-8 text-gray-600">
  中文内容在这里
</p>
```

## 모범 사례

### 해야 할 일

- 모든 props 타입에 TypeScript 인터페이스 사용
- `@/` 별칭을 사용한 절대 경로로 컴포넌트 임포트
- 조건부 클래스 이름에 `clsx` 사용
- 모바일 우선 반응형 디자인 따르기
- 모든 스타일링에 다크 모드 변형 포함
- 의미론적 HTML5 요소 사용
- 이미지에 설명적인 alt 텍스트 제공
- DOM props 확장을 위해 `React.ComponentPropsWithoutRef` 사용

### 피해야 할 일

- `any` 타입 사용 금지 - 적절한 TypeScript 타입 선호
- JSX에 큰 객체 인라인 금지 - 변수로 추출
- 절대적으로 필요하지 않으면 `!` 어서션 사용 금지
- 비동기 작업을 위한 로딩/에러 상태 처리 잊지 않기
- 사용되지 않는 React 패턴 사용 금지 (componentWillMount 등)
- 린팅 없이 커밋 금지

## 개발 워크플로우

1. **설정**: `npm install`
2. **개발**: `npm run dev`
3. **린팅**: 커밋 전에 `npm run lint` 실행
4. **빌드**: 프로덕션 빌드 테스트를 위해 `npm run build`
5. **배포**: 선호하는 호스팅 플랫폼 사용

## 일반적인 이슈 및 해결책

### 임포트 경로 이슈

내부 임포트에는 항상 `@/` 별칭 사용:

```typescript
// 올바름
import { Button } from '@/components/Button'

// 잘못됨
import { Button } from '../../../components/Button'
```

### Tailwind 클래스 이슈

- 클래스는 prettier-plugin-tailwindcss에 의해 자동 정렬됨
- 반응형 접두사 일관성 있게 사용: `sm:`, `md:`, `lg:`, `xl:`
- 다크 모드 변형 포함: `dark:`
- 가능한 Tailwind 스케일에서 간격 사용, 임의 값 피하기

이 파일은 이 코드베이스에서 작업하는 모든 AI 에이전트를 위한 종합 가이드입니다. 일관성과 코드 품질을 유지하기 위해 이 패턴을 따르세요.

## AI 에이전트 가이드
- 플랜 작성시 한글로 작성해주세요