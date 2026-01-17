"use client";

import { useState } from "react";

const services = [
  {
    icon: "🔧",
    title: "Установка",
    description:
      "Профессиональный монтаж кондиционеров любой сложности с гарантией до 3 лет",
    features: [
      "Выезд замерщика бесплатно",
      "Монтаж за 1 день",
      "Чистая работа без пыли",
      "Гарантия 3 года",
    ],
    price: "от 3 500 ₽",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🧹",
    title: "Обслуживание",
    description:
      "Комплексная чистка и антибактериальная обработка внутреннего и внешнего блока",
    features: [
      "Глубокая чистка фильтров",
      "Обработка антисептиком",
      "Проверка фреона",
      "Диагностика системы",
    ],
    price: "от 2 000 ₽",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🔄",
    title: "Заправка",
    description:
      "Заправка фреоном R410a и R32 с проверкой герметичности системы",
    features: [
      "Поиск утечек",
      "Вакуумирование",
      "Качественный фреон",
      "Гарантия 1 год",
    ],
    price: "от 2 500 ₽",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🛠️",
    title: "Ремонт",
    description: "Диагностика и устранение любых неисправностей климатической техники",
    features: [
      "Выезд в день обращения",
      "Диагностика бесплатно*",
      "Оригинальные запчасти",
      "Гарантия на ремонт",
    ],
    price: "от 1 500 ₽",
    color: "from-orange-500 to-amber-500",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Наши услуги
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Полный спектр услуг по установке, обслуживанию и ремонту
            кондиционеров. Работаем со всеми брендами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-zinc-50 dark:bg-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
              />

              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl shadow-lg flex-shrink-0 transition-transform group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-600">
                      <div>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          Стоимость
                        </span>
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          {service.price}
                        </div>
                      </div>
                      <a
                        href="#pricing"
                        className={`px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-shadow`}
                      >
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 dark:text-zinc-400 mb-6">
            Работаем со всеми популярными брендами
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {[
              "Samsung",
              "LG",
              "Daikin",
              "Mitsubishi",
              "Haier",
              "Toshiba",
              "Panasonic",
              "Gree",
            ].map((brand) => (
              <div
                key={brand}
                className="text-lg font-semibold text-zinc-400 dark:text-zinc-500"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
