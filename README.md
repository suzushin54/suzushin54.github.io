# suzushin54.github.io

**Blueprint Harbor** — Shinichiro MIKAMI のポートフォリオサイト。
Next.js (App Router) の静的 export を GitHub Pages で配信しています。

https://suzushin54.github.io/

## Stack

- Next.js / TypeScript / Tailwind CSS
- `output: 'export'` による静的サイト生成(サーバ機能なし)
- デプロイ: `main` への push で `.github/workflows/deploy.yml` が `out/` を GitHub Pages へ公開

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # 静的 export を out/ に生成
```

## Data & Design

- 表示データは `lib/portfolio-data.ts` に集約(経歴マスターデータの private リポジトリから転記)
- デザインテーマ「Blueprint Harbor」(青焼き × 港町・横浜)は v0 で作成した PoC が原型。
  このリポジトリは手動メンテであり、v0 からの自動 push はありません
