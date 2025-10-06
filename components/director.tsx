export function Director() {
  return (
    <section id="director" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-foreground">院長紹介</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl mb-2 text-foreground">院長　山田 太郎</h3>
              <p className="text-muted-foreground text-lg">柔道整復師 / 鍼灸師</p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>福山市で生まれ育ち、地域の皆様の健康をサポートしたいという想いから、てにひらを開院いたしました。</p>
              <p>
                15年以上の臨床経験を活かし、頭痛や肩こりなど、現代人特有の症状に対して、根本的な改善を目指した施術を提供しています。
              </p>
              <p>
                お一人おひとりの症状や生活習慣に合わせた、オーダーメイドの施術プランをご提案いたします。痛みのない生活を取り戻すお手伝いをさせてください。
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-lg mb-3 text-foreground">資格・経歴</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>柔道整復師国家資格取得</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>鍼灸師国家資格取得</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>スポーツトレーナー認定資格</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>整形外科クリニック勤務（10年）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>プロスポーツチーム専属トレーナー経験</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src="/professional-japanese-chiropractor-in-white-coat-s.jpg"
              alt="院長"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
