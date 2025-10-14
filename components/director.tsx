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
            福山市で生まれ育ち、地域の皆様の健康をサポートしたいという想いから<br />
          《出張整体 てのひら》 を初めました。<br />
          <br />
          肩こり・腰痛など現代人特有の症状に対して根本的な改善を目指した施術を提供しています。以前の勤務先では、主に産後の骨盤矯正やダイエットメニューを担当していましたので、女性の方もお気軽にご相談下さい。<br />
          <br />
          お1人おひとりの症状や生活習慣に合わせた、オーダーメイドの施術をご提案いたします。施術は痛みの少ないソフトな手技を中心に行います。<br />
          <br />
          定期的にイベントにも参加していますので、ご興味ありましたら<br />
          ご家族やお友達と一緒にご参加ください。</div>

            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-lg mb-3 text-foreground">資格・経歴</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>柔道整復師国家資格取得</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>機能訓練指導員の経験あり</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>ファステイングカウンセラー ( 栄養指導 )</span>
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
