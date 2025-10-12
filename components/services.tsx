import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Dumbbell, Activity, Zap } from "lucide-react"

const services = [
  {
    icon: Brain,
  // title: "頭痛治療", // 削除
      title: "肩こり・首こり・猫背矯正",
      description:
        "緊張型頭痛、片頭痛など、様々なタイプの頭痛に対応。首や肩の筋肉の緊張をほぐし、血流を改善することで根本から改善します。",
    duration: "40分",
    price: "¥4,500",
  },
  {
    icon: Dumbbell,
    title: "肩こり改善",
    description:
      "デスクワークやスマホ使用による慢性的な肩こりを解消。筋肉の深部までアプローチし、可動域を広げて快適な日常を取り戻します。",
    duration: "40分",
    price: "¥4,500",
  },
  {
    icon: Activity,
    title: "全身調整",
    description: "骨格や筋肉のバランスを整え、身体全体の不調を改善。姿勢の歪みから来る様々な症状に対応します。",
    duration: "60分",
    price: "¥6,000",
  },
  {
    icon: Zap,
    title: "スポーツ障害",
    description:
      "運動による怪我や痛みの治療とリハビリ。アスリートから趣味で運動される方まで、早期回復をサポートします。",
    duration: "50分",
    price: "¥5,500",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">施術メニュー</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            お客様の症状やご要望に合わせて、最適な施術をご提案いたします
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
