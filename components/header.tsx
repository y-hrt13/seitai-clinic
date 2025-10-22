"use client"

import { Menu } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3" ref={menuRef}>
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="てのひら ロゴ"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontSize: "1.5em" }}>
                てのひら
              </span>
              <div className="text-xs text-muted-foreground">
                10年後も健康で美しくいるために
              </div>
            </div>
          </a>

          {/* --- PCナビゲーション --- */}
          <nav className="hidden md:flex items-center gap-6">
            {/* PCでは一番左に配置 */}
            <a
              href="#services"
              className="flex flex-col items-center justify-center px-3 py-2 border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white transition-colors leading-tight text-[11px]"
            >
              <span>施術内容</span>
              <span>・</span>
              <span>料金</span>
            </a>

            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              「てのひら」について
            </a>
            <a href="#staff" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              スタッフ紹介
            </a>
            <a
              href="https://www.instagram.com/y.hrt13?igsh=MTRuZXNhM3l0Z3l5bA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://forms.gle/J9rucSxzn2ymx6qaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ご予約
            </a>
          </nav>

          {/* --- スマホナビゲーション --- */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#services"
              className="flex flex-col items-center justify-center text-[11px] px-2 py-1 border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white transition-colors leading-tight"
            >
              <span>施術内容</span>
              <span>・</span>
              <span>料金</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
              className="p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* --- モバイルメニュー --- */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white/95 p-4 rounded-lg shadow-md">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              「てのひら」 について
            </a>
            <a href="#staff" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              スタッフ紹介
            </a>
            <a
              href="https://www.instagram.com/y.hrt13?igsh=MTRuZXNhM3l0Z3l5bA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://forms.gle/J9rucSxzn2ymx6qaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ご予約
            </a>
            <a href="#top" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              トップに戻る
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

