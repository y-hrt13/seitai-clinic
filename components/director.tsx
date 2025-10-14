export function Director() {
  return (
    <section id="director" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-foreground">スタッフ紹介</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl mb-2 text-foreground">院長　平田　裕也</h3>
              <p className="text-muted-foreground text-lg">柔道整復師 / 整体師</p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>福山市で生まれ育ち、地域の皆様の健康をサポートしたいという想いから、《 出張整体てにひら 》を初めました。</p>
              <p>
                肩こり腰痛、現代人特有の症状に対して、根本的な改善を目指した施術を提供しています。
                以前の勤務先では、主に産後の骨盤矯正やダイエットメニューを担当していましたのでお気軽にご相談下さい。
              </p>
              <p>
                お1人おひとりの症状や生活習慣に合わせた、オーダーメイドの施術をご提案いたします。
                施術は痛みの少ないソフトな手技を中心に行います。
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
                  <span>ファステイングカウンセラー</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>機能訓練指導員の経験</span>
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
