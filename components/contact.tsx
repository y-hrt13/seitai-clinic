"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ご予約 ・ お問い合わせ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            お電話 ・ 公式LINEでも受け付けております。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* --- 左側：連絡情報 --- */}
          <div className="space-y-6">
            {/* 電話予約 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  お電話でのご予約
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">070-8556-1051</p>
                <p className="text-sm text-muted-foreground">
                  受付時間：9:00〜20:00（ 日曜 ・ 祝日定休 ）
                </p>
              </CardContent>
            </Card>

            {/* イベント情報 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  イベント情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground">現在、イベントの予定はありません。</p>
                <p className="text-foreground">会場場所</p>
                <p className="text-sm text-muted-foreground">〇〇から徒歩〇〇分</p>
                <p className="text-sm text-muted-foreground">駐車場 ( あり / なし )</p>
              </CardContent>
            </Card>

            {/* 営業時間 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  営業時間
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">月〜土</span>
                  <span className="text-foreground">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">日曜 ・ 祝日</span>
                  <span className="text-destructive">定休日</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* --- 右側：Instagram案内 --- */}
{/* --- 右側：Instagram案内 --- */}
<Card className="border-border bg-white text-black">
  <CardHeader>
    <CardTitle className="text-center">Instagram</CardTitle>
    <CardDescription className="text-center text-black">
      プライベートの様子も更新していきます♪
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col items-center justify-center space-y-4">
    {/* Instagram画像 */}
    <div className="w-full rounded-xl overflow-hidden shadow-md">
      <Image
        src="/instagram-sample.jpg" 
        alt="Instagramページのイメージ"
        width={600}
        height={400}
        className="object-cover w-full h-auto"
      />
    </div>

    {/* Instagramボタンのみ淡いピンクの枠・背景 */}
    <a
  href="https://www.instagram.com/y.hrt13?igsh=MTRuZXNhM3l0Z3l5bA%3D%3D&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-pink-500 text-white rounded px-4 py-2 font-semibold hover:bg-pink-600 transition-all"
>
  Instagramを見てみる 👈
</a>

  </CardContent>
</Card>


        </div>
      </div>
    </section>
  )
}

