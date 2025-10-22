"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo.png" alt="てのひら ロゴ" width={60} height={60} className="object-contain" />
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontSize: "1.5em" }}>てのひら</span>
              <div className="text-xs text-muted-foreground">10年後も健康で美しくいるために</div>
            </div>
          </a>

          {/* PCナビ */}
          <nav className="hidden md:flex items-center gap-6">
            {/* 省略（同じ内容） */}
          </nav>

          {/* スマホナビ */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#services"
              className="flex flex-col items-center justify-center text-[11px] px-2 py-1 border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white transition-colors leading-tight"
            >
              <span>施術内容</span>
              <span>料金</span>
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="メニュー" className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <>
            {/* 背景クリックで閉じる */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* メニュー本体 */}
            <nav
              className="absolute left-0 right-0 mt-4 pb-4 flex flex-col gap-4 bg-white z-50 border-b border-gray-200 p-4 rounded-b-2xl"
              onClick={(e) => e.stopPropagation()} // メニュー内クリックでは閉じない
            >
              <a href="#about" onClick={() => setIsMenuOpen(false)}>「てのひら」について</a>
              <a href="#staff" onClick={() => setIsMenuOpen(false)}>スタッフ紹介</a>
              <a href="https://www.instagram.com/y.hrt13" target="_blank" onClick={() => setIsMenuOpen(false)}>Instagram</a>
              <a href="https://forms.gle/J9rucSxzn2ymx6qaA" target="_blank" onClick={() => setIsMenuOpen(false)}>ご予約</a>
              <a href="#top" onClick={() => setIsMenuOpen(false)}>トップに戻る</a>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
