"use client"

import { MessageCircle, Phone, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            福山市の「出張整体」
            <br />
            ソフトで優しい矯正<span className="text-primary"></span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            お仕事が忙しくて<br />
            なかなか通院が出来ない．．．<br />
            <br />
            出産後のケアがしたいけど、<br />
            子どもを連れて行くのが不安．．．<br />
            <br />
            料金が高くて何回も通うのは難しい．．．<br />
            <br />
            そんな方こそ、ぜひ一度ご相談下さい。
          </p>

          {/* --- 予約・相談ボタン3つ --- */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
            {/* LINE相談 */}
            <a
              href="https://lin.ee/" // ← あなたのLINE公式URLに変更
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-10 h-10 mb-2" />
              <span className="text-sm font-semibold">LINE相談</span>
            </a>

            {/* 電話予約 */}
            <a
              href="tel:080-XXXX-XXXX" // ← 電話番号を設定
              className="flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all"
            >
              <Phone className="w-10 h-10 mb-2" />
              <span className="text-sm font-semibold">電話予約</span>
            </a>

            {/* ネット予約 */}
            <a
              href="#contact" // ← あなたの予約フォームなどにリンク
              className="flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all"
            >
              <Mail className="w-10 h-10 mb-2" />
              <span className="text-sm font-semibold">ネット予約</span>
            </a>
          </div>
        </div>

        <div className="mt-16 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/peaceful-massage-therapy-room-with-natural-light.jpg"
            alt="整体院の施術室"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
