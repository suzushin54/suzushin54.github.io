export const profile = {
  name: 'Shinichiro MIKAMI',
  title: 'ソフトウェアエンジニア / 個人事業主',
  titleEn: 'Software Engineer', // ブラウザタブ・OGP 用(layout.tsx の metadata から参照)
  oneLiner:
    'IT業界14年のソフトウェアエンジニア。ドメイン駆動設計と分散システムを軸に、可読性・保守性の高いシステムとチーム開発体験づくりを得意とする。',
  current:
    '2024年12月よりデジタル庁に所属。並行して個人事業(業務委託・技術セミナー)を営む。',
  github: 'https://github.com/suzushin54',
  speakerDeck: 'https://speakerdeck.com/suzushin54',
}

export const navItems = [
  { id: 'strengths', label: 'Strengths' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'talks', label: 'Talks' },
  { id: 'contact', label: 'Contact' },
]

export const strengths = [
  {
    no: '01',
    title: '可読性・保守性を重視したWebシステム開発',
    en: 'Readable & maintainable web systems',
  },
  {
    no: '02',
    title: 'ドメイン駆動設計(DDD)の導入',
    en: 'Domain-Driven Design adoption',
  },
  {
    no: '03',
    title: '分散システム / マイクロサービスアーキテクチャの理解と実践',
    en: 'Distributed systems & microservices',
  },
  {
    no: '04',
    title: 'チーム開発体験(DX)の改善',
    en: 'Developer experience improvement',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Go', 'PHP', 'C#', 'Java', 'Rust', 'TypeScript'],
  },
  {
    label: 'Frameworks',
    items: ['Laravel', 'echo', 'Vue.js / Nuxt.js', 'Next.js / React'],
  },
  {
    label: 'Architecture',
    items: [
      'DDD',
      'Layered Architecture',
      'CQRS',
      'Event Sourcing',
      'REST / gRPC / GraphQL',
    ],
  },
  {
    label: 'Infra',
    items: ['AWS', 'Docker', 'MySQL', 'DynamoDB', 'Apache Solr'],
  },
]

export const experience = [
  {
    company: 'デジタル庁',
    role: 'Software Engineer',
    period: '2024.12 – 現在',
    current: true,
    highlights: ['公共系システムの開発・運用保守'],
  },
  {
    company: '個人事業',
    role: 'Freelance Engineer',
    period: '2024.12 – 現在',
    current: true,
    highlights: [
      'Rust によるECサイトバックエンドのPoC構築(Layered Architecture + REST API)',
      'エンジニアチーム向けのAI活用セミナー(単発)',
    ],
  },
  {
    company: 'ベースフード株式会社',
    role: 'Senior Software Engineer',
    period: '2023.01 – 2024.11',
    current: false,
    highlights: [
      'エンジニア採用を推進し半年で4名採用',
      '「作らない開発」とトイル撲滅、スクラム導入でチーム開発体制を構築',
      '自社ECサイトの Next.js 化を主導し 2024.07 リリース',
    ],
  },
  {
    company: '株式会社Showcase Gig',
    role: 'Backend → Tech Lead',
    period: '2019.04 – 2022.12',
    current: false,
    highlights: [
      'モバイルオーダーのリプレースで DDD 戦略的設計を主導、輪読会・モブプロでGo経験者を3名に増やしMVP達成',
      '会員管理システムを Amazon Cognito 活用で約3ヶ月リリース(社内初のGoサービス)',
      'テストカバレッジ・ADR 導入で品質と意思決定を可視化、新メンバーの立ち上がりを1sprint化',
    ],
  },
  {
    company: '株式会社デザインワン・ジャパン',
    role: 'Backend Engineer',
    period: '2017.09 – 2019.03',
    current: false,
    highlights: [
      '口コミサイトのマイクロサービス化を PjM/開発 兼務で推進、3回連続でズレのないリリース',
      '全文検索(Solr)のキャッシュ最適化でヒット率3割向上・処理時間を1/10に削減',
    ],
  },
  {
    company: '株式会社富士通システムズウェブテクノロジー',
    role: 'SE / PjM',
    period: '2012.04 – 2017.08',
    current: false,
    highlights: ['連結会計システムの開発・導入(C#)、オフショア開発マネジメント'],
  },
]

export const talks = [
  {
    event: 'Object-Oriented Conference 2024',
    title: 'ドメイン・ファーストで考える問題解決に役立つモデル設計',
    year: '2024',
  },
  {
    event: 'Go Conference mini 2022 Autumn IN SENDAI',
    title: '認知的複雑度から見るGo言語のイベントソーシング実装',
    year: '2022',
  },
  {
    event: '『Learning Domain-Driven Design』輪読会',
    title: '主催・登壇(第1・4・9・15回担当)',
    year: '2022',
  },
  {
    event: '現場から学ぶシステム設計:座談会',
    title: '複数の境界づけられたコンテキストにおける共通ロジックの扱いについて',
    year: '2021',
  },
]
