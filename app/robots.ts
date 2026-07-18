import type { MetadataRoute } from 'next'

export const dynamic = 'force-static' // output: 'export' では静的ルートである明示が必須

// リンクを知っている人だけが辿り着く想定のページのため、クロールを許可しない
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  }
}
