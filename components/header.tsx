"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
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
              src="/logo.png" // public/logo.png に配置
              alt="てのひら ロゴ"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontSize: '1.5em' }}>
                てのひら
              </span>
              <div className="text-xs text-muted-foreground">
                10年後も健康で美しくいるために
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              施術内容 ・ 料金
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              「てのひら」 について
            </a>  
            <a href="#staff" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              スタッフ紹介
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ご予約
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              施術内容・料金
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              「てのひら」 について
            </a>  
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              スタッフ紹介
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ご予約
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}