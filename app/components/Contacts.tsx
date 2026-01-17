"use client";

import { useState } from "react";

const contacts = [
  {
    icon: "📞",
    label: "Телефон",
    value: "+7 900 123-45-67",
    href: "tel:+79001234567",
    description: "Звоните с 8:00 до 21:00",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Написать в WhatsApp",
    href: "https://wa.me/79001234567?text=Здравствуйте! Хочу узнать о ваших услугах",
    description: "Ответим в течение 15 минут",
  },
  {
    icon: "📧",
    label: "Email",
    value: "info@climatpro.ru",
    href: "mailto:info@climatpro.ru",
    description: "Для заявок и вопросов",
  },
  {
    icon: "📱",
    label: "Telegram",
    value: "@climatpro",
    href: "https://t.me/climatpro",
    description: "Для быстрой связи",
  },
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", service: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacts" className="py-20 px-4 bg-white dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Оставьте заявку или свяжитесь любым удобным способом. Мы ответим в
            течение 15 минут в рабочее время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Оставить заявку
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  Заявка отправлена!
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Мы перезвоним вам в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-zinc-900 dark:text-white"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="installation">Установка кондиционера</option>
                    <option value="maintenance">Обслуживание и чистка</option>
                    <option value="repair">Ремонт</option>
                    <option value="consultation">Консультация</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Сообщение (необязательно)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-zinc-900 dark:text-white"
                    placeholder="Опишите вашу задачу..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Отправка...</span>
                    </>
                  ) : (
                    <>
                      <span>Отправить заявку</span>
                      <span>→</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Contact Methods */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
              Способы связи
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {contact.label}
                    </div>
                    <div className="font-semibold text-zinc-900 dark:text-white">
                      {contact.value}
                    </div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                      {contact.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Call CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-xl font-bold mb-2">Нужна срочная помощь?</h4>
              <p className="text-blue-100 mb-4">
                Позвоните нам прямо сейчас — мы на связи!
              </p>
              <a
                href="tel:+79001234567"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
              >
                <span>+7 900 123-45-67</span>
              </a>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🕐</div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">
                    Режим работы
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    Ежедневно с 8:00 до 21:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
