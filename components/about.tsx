import { CheckCircle2 } from "lucide-react"

const features = [
  "柔道整復師の国家資格保有",
  "ソフトで優しい施術",
  "福山市で出張整体",
  "完全予約制",
]

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/professional-chiropractor-treating-patient.jpg"
              alt="施術の様子"
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            てのひら<span className="text-primary"></span>について
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              てのひらは、福山市で活動する「出張整体」です。
              お子様でも安心して受けて頂けるような、ソフトで優しい施術を提供いたします。
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              お仕事が忙しい、お子連れでなかなか通院が難しい、交通事故でお悩みの方はぜひ一度ご相談ください。
              国家資格を持つ柔道整復師が、サポートさせて頂きます。
            </p>

            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
