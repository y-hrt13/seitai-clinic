export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">てのひら</h3>
            <p className="text-xs text-muted-foreground mb-3">10年後も健康で美しくいるために</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              福山市で整体をお探しの方へ。
              <br />
              根本改善をサポートします。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">メニュー</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  施術内容・料金
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  「てのひら」について
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  スタッフ紹介
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  ご予約・お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>TEL: 070-8556-1051</li>
              <li>受付: 9:00〜20:00</li>
              <li>定休日: 日曜・祝日</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 てのひら. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
