/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的HTMLを out/ に書き出す(GitHub Pages 配信用)。変更時は deploy.yml の path も合わせる
  trailingSlash: true, // /about → /about/index.html。Pages のパス解決を安定させる
  images: {
    unoptimized: true, // next/image のサーバ最適化は静的 export では使えない
  },
}

export default nextConfig
