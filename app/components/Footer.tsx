const footerLinks = {
  services: [
    { label: "Установка кондиционеров", href: "#pricing" },
    { label: "Обслуживание и чистка", href: "#pricing" },
    { label: "Ремонт и диагностика", href: "#pricing" },
    { label: "Демонтаж и перенос", href: "#pricing" },
  ],
  company: [
    { label: "О компании", href: "#about" },
    { label: "Наши работы", href: "#portfolio" },
    { label: "Отзывы клиентов", href: "#testimonials" },
    { label: "Контакты", href: "#contacts" },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
    { label: "Гарантийные условия", href: "#" },
  ],
};

const socialLinks = [
  { icon: "📱", label: "Telegram", href: "https://t.me/climatpro" },
  { icon: "📷", label: "Instagram", href: "https://instagram.com/climatpro" },
  { icon: "🎬", label: "YouTube", href: "https://youtube.com/@climatpro" },
  { icon: "📘", label: "VK", href: "https://vk.com/climatpro" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">❄️</span>
              <span className="font-bold text-xl">КлиматПро</span>
            </a>
            <p className="text-zinc-400 text-sm mb-6">
              Профессиональный сервис кондиционеров в Москве и области. Работаем
              с 2014 года.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+79001234567"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <span>📞</span>
                <span>+7 900 123-45-67</span>
              </a>
              <a
                href="https://wa.me/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:info@climatpro.ru"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <span>✉️</span>
                <span>info@climatpro.ru</span>
              </a>
              <div className="flex items-start gap-2 text-zinc-400">
                <span>📍</span>
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm">
              © {currentYear} КлиматПро. Все права защищены.
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Callback Button (Fixed) */}
      <a
        href="tel:+79001234567"
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-40"
        title="Позвонить"
      >
        <span className="text-2xl">📞</span>
      </a>
    </footer>
  );
}
