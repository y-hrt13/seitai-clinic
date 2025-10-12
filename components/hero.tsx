import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            福山市で出張整体！！
            <br />
            肩こり・腰痛・姿勢改善・産後矯正<span className="text-primary"></span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            出産後のケアがしたいけど、子どもを連れていけない．．．
            <br />
            料金が高くて何回も通うのは難しい．．．
            そんな方こそ、ぜひ一度ご相談下さい。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              初回限定キャンペーン
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              施術内容を見る
            </Button>
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
