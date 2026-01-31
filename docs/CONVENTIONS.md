# 코딩 컨벤션

## TypeScript
- **Strict Mode**: 반드시 활성화해야 합니다.
- **Interfaces**: 객체 형태(Props, Data 등) 정의 시 Interface를 사용합니다.
- **No Any**: `any` 타입 사용을 지양합니다. 꼭 필요한 경우 `unknown`이나 엄격한 타입을 사용하세요.

## 컴포넌트 패턴 (Component Patterns)
- **함수형 컴포넌트**: 최상위 컴포넌트 정의 시 화살표 함수보다 `function` 키워드 사용을 권장합니다.
  ```tsx
  export function MyComponent({ prop }: Props) { ... }
  ```
- **Compound Components**: 복잡한 UI 구성 시 사용합니다 (예: `Card.Title`).
- **ForwardRef**: ref 전달이 필요한 경우 사용합니다.

## 임포트 순서 (Imports)
1. React / Next.js
2. 서드파티 라이브러리 (Third-party Libraries)
3. 내부 모듈 (Internal Modules, `S/...`)

## 스타일링 (Tailwind CSS)
- 조건부 클래스 적용 시 `clsx` 또는 `class-variance-authority`를 사용합니다.
- 클래스는 논리적 순서로 그룹화합니다 (레이아웃 -> 여백 -> 시각적 요소).
- 색상 관련 클래스에는 항상 `dark:` 변형(다크 모드 지원)을 포함합니다.

## 접근성 (Accessibility)
- 의미론적 HTML 태그를 사용합니다 (`nav`, `main`, `article` 등).
- 아이콘 전용 버튼에는 `aria-label`을 추가합니다.
- 이미지에는 반드시 `alt` 텍스트를 제공합니다.
