import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Dumbbell, Activity, Zap } from "lucide-react"

const services = [
  {
    icon: Brain,
      title: "首こり・肩こり・猫背矯正",
      description:
        "首や肩の筋肉の緊張をほぐしていきます。猫背に関係してくる関節・筋肉へのアプローチをしていきます。",
    duration: "30分～60分",
    price: "¥3,500～¥5,500"
  },
  {
    icon: Dumbbell,
  title: "腰痛・反り腰・骨盤矯正",
    description:
      "腰や下肢の筋肉の緊張をほぐしていきます。股関節や背骨の歪みを整えていくことで反り腰・痛みを改善していきます。",
    duration: "30分～60分",
    price: "¥3,500～¥5,500"
  },
  {
    icon: Activity,
  title: "産後ケア",
    description: "骨盤矯正をしていきます。骨盤だけではなく「歩き方・立ち方・座り方」など妊娠中に出来た良くない癖を改善していく中で、育児で疲労した身体を整えていきます。",
    duration: "30分～60分",
    price: "¥3,500～¥5,500",
  },
  {
    icon: Zap,
    title: "交通事故相談",
    description:
      "交通事故によるむち打ち症状や事故対応「保険対応」などアドバイス致します。症状によってはお近くの医療機関をご紹介します",
    duration: "30分",
    price: "¥0",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">施術内容・料金</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            お客様の症状やご要望に合わせて、オーダーメイドの施術をご提案いたします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        <span>{service.duration}</span>
                        <span>•</span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
