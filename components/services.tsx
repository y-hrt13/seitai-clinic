import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    image: "imagesneck.jpg",
    title: "首こり ・ 肩こり ・ 猫背矯正",
    description:
      "首や肩の筋肉の緊張をほぐしていきます。猫背に関係してくる関節・筋肉へのアプローチをしていきます。",
  },
  {
    image: "imageswaist.jpg",
    title: "腰痛 ・ 反り腰 ・ 骨盤矯正",
    description:
      "腰や下肢の筋肉の緊張をほぐしていきます。股関節や背骨の歪みを整えていくことで反り腰・痛みを改善していきます。",
  },
  {
    image: "imagespostpartum.jpg",
    title: "産後ケア",
    description:
      "骨盤矯正をしていきます。骨盤だけではなく「歩き方・立ち方・座り方」など妊娠中に出来た良くない癖を改善していく中で、育児で疲労した身体を整えていきます。",
  },
  {
    image: "imagesaccident.jpg",
    title: "交通事故 無料相談",
    description:
      "交通事故によるむち打ち症状や事故対応「保険対応」などアドバイス致します。症状によってはお近くの医療機関をご紹介します。",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          施術内容 ・ 料金
        </h2>

        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          お客様の症状やご要望に合わせて、下記の施術内容からオーダーメイドで施術致します。
          <br />
          <div className="border-2 border-black rounded-lg p-6 mt-6 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-stretch">
              {/* 左側：料金 */}
              <div className="flex flex-col justify-center items-center w-full md:w-1/2">
                <div className="text-2xl md:text-3xl font-bold text-black space-y-3">
                  <div className="flex w-full max-w-xs md:max-w-none items-center gap-3">
                    <span className="text-gray-700 text-3xl md:text-4xl w-6 text-center leading-none">□</span>
                    <span className="flex-1 text-left">30分 : 3,500円</span>
                  </div>
                  <div className="flex w-full max-w-xs md:max-w-none items-center gap-3">
                    <span className="text-gray-700 text-3xl md:text-4xl w-6 text-center leading-none">□</span>
                    <span className="flex-1 text-left">60分 : 5,500円</span>
                  </div>
                  <div className="flex w-full max-w-xs md:max-w-none items-center gap-3">
                    <span className="text-gray-700 text-3xl md:text-4xl w-6 text-center leading-none">□</span>
                    <span className="flex-1 text-left text-base md:text-lg font-semibold text-red-400">
                      初回 : 500円引き
                    </span>
                  </div>
                </div>
              </div>

              {/* 中央の黒線 */}
              <div className="hidden md:block border-l-2 border-black mx-8"></div>

              {/* 右側：例文 */}
              <div className="flex flex-col justify-center text-left text-sm md:text-base font-medium text-black leading-relaxed w-full md:w-1/2">
                <span className="block mb-2 text-xs md:text-sm">( 例 )</span>
                肩こり ＋ 骨盤矯正 ＝ 30分 ( 3,500円 )
                <br />
                <br />
                猫背矯正 ＋ 腰痛 ＋ 首こり ＝ 60分 ( 5,500円 )
              </div>
            </div>
          </div>
        </p>
      </div>

      {/* --- 下の施術内容カード --- */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                {/* 画像部分：1/3 */}
                <div className="w-1/3">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>

                {/* テキスト部分：2/3 */}
                <div className="w-2/3">
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}