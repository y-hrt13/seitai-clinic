"use client"

import { Menu, CircleDollarSign } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ＋テキスト */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="てのひら ロゴ"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontSize: "1.5em" }}
              >
                てのひら
              </span>
              <div className="text-xs text-muted-foreground">
                10年後も健康で美しくいるために
              </div>
            </div>
          </div>

          {/* --- PCナビゲーション --- */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm px-4 py-2 border border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition-colors"
            >
              施術内容 ・ 料金
            </a>
            <a
              href="#about"
              className="text-sm px-4 py-2 border border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition-colors"
            >
              「てのひら」 について
            </a>
            <a
              href="#staff"
              className="text-sm px-4 py-2 border border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition-colors"
            >
              スタッフ紹介
            </a>
            <a
              href="#contact"
              className="text-sm px-4 py-2 border border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition-colors"
            >
              ご予約
            </a>
          </nav>

          {/* --- スマホナビゲーション --- */}
          <div className="flex items-center gap-4 md:hidden">
            {/* 💰料金マーク＋文字 */}
            <a
              href="#services"
              className="flex flex-col items-center justify-center text-black bg-white border border-black rounded-full w-14 h-14 hover:bg-black hover:text-white transition-colors"
            >
              {/* マークを大きめに */}
              <CircleDollarSign className="h-7 w-7 mb-0.5" strokeWidth={2.5} />
              <span className="text-[10px] font-medium">料金</span>
            </a>

            {/* ハンバーガーメニュー */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
              className="p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* --- モバイルメニュー展開部分 --- */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              「てのひら」 について
            </a>
            <a
              href="#staff"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              スタッフ紹介
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ご予約
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
