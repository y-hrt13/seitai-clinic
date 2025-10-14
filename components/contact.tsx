"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">ご予約 ・ お問い合わせ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ご予約 ・ ご相談は、お電話 ・ 公式LINEでも受け付けております。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  お電話でのご予約
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">070-8556-1051</p>
                <p className="text-sm text-muted-foreground">受付時間：9:00〜20:00（ 日曜 ・ 祝日定休 ）</p>
              </CardContent>
            </Card>

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
                <p className="text-sm text-muted-foreground">福山駅より徒歩〇〇分</p>
                <p className="text-sm text-muted-foreground">駐車場 ( あり / なし )</p>
              </CardContent>
            </Card>

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

          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
              <CardDescription>24時間受付中。2営業日以内にご返信いたします</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    お名前 <span className="text-destructive">*</span>
                  </label>
                  <Input id="name" placeholder="" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    電話番号 <span className="text-destructive">*</span>
                  </label>
                  <Input id="email" type="email" placeholder="" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    出張先　ご住所
                  </label>
                  <Input id="phone" type="tel" placeholder="" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    お問い合わせ内容 <span className="text-destructive">*</span>
                  </label>
                  <Textarea id="message" placeholder="事前に相談したいことを入力" rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
