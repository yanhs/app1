"use client";

import { useState } from "react";

const pricingCategories = [
  {
    id: "installation",
    name: "Установка",
    icon: "🔧",
    items: [
      {
        service: "Установка сплит-системы до 3.5 кВт",
        price: "3 500 ₽",
        note: "Стандартный монтаж до 3м трассы",
      },
      {
        service: "Установка сплит-системы 3.5-5 кВт",
        price: "4 500 ₽",
        note: "Стандартный монтаж до 3м трассы",
      },
      {
        service: "Установка сплит-системы 5-7 кВт",
        price: "5 500 ₽",
        note: "Стандартный монтаж до 3м трассы",
      },
      {
        service: "Установка мульти-сплит системы",
        price: "от 8 000 ₽",
        note: "Цена за один внутренний блок",
      },
      {
        service: "Дополнительный метр трассы",
        price: "1 000 ₽",
        note: "Свыше стандартных 3м",
      },
      {
        service: "Установка на вентилируемый фасад",
        price: "+2 000 ₽",
        note: "К стоимости установки",
      },
    ],
  },
  {
    id: "maintenance",
    name: "Обслуживание",
    icon: "🧹",
    items: [
      {
        service: "Чистка внутреннего блока",
        price: "2 000 ₽",
        note: "С антибактериальной обработкой",
      },
      {
        service: "Чистка внешнего блока",
        price: "2 500 ₽",
        note: "Мойка керхером",
      },
      {
        service: "Комплексное ТО сплит-системы",
        price: "3 500 ₽",
        note: "Чистка + диагностика + дозаправка",
      },
      {
        service: "Антибактериальная обработка",
        price: "500 ₽",
        note: "Профессиональным средством",
      },
      {
        service: "Диагностика неисправности",
        price: "1 000 ₽",
        note: "При ремонте — бесплатно",
      },
      {
        service: "Договор на годовое обслуживание",
        price: "5 000 ₽",
        note: "2 визита в год + скидка 15%",
      },
    ],
  },
  {
    id: "repair",
    name: "Ремонт",
    icon: "🛠️",
    items: [
      {
        service: "Заправка фреоном R410a",
        price: "от 2 500 ₽",
        note: "Цена за 100г фреона",
      },
      {
        service: "Заправка фреоном R32",
        price: "от 3 000 ₽",
        note: "Цена за 100г фреона",
      },
      {
        service: "Устранение утечки фреона",
        price: "от 3 500 ₽",
        note: "Поиск + пайка",
      },
      {
        service: "Замена компрессора",
        price: "от 8 000 ₽",
        note: "Без стоимости компрессора",
      },
      {
        service: "Замена платы управления",
        price: "от 4 000 ₽",
        note: "Без стоимости платы",
      },
      {
        service: "Ремонт дренажной системы",
        price: "от 2 000 ₽",
        note: "Прочистка или замена",
      },
    ],
  },
  {
    id: "dismantling",
    name: "Демонтаж",
    icon: "📦",
    items: [
      {
        service: "Демонтаж сплит-системы",
        price: "2 000 ₽",
        note: "С сохранением фреона",
      },
      {
        service: "Демонтаж без сохранения",
        price: "1 500 ₽",
        note: "Для утилизации",
      },
      {
        service: "Перенос кондиционера",
        price: "от 5 000 ₽",
        note: "Демонтаж + монтаж",
      },
      {
        service: "Вывоз старого кондиционера",
        price: "1 000 ₽",
        note: "С утилизацией",
      },
    ],
  },
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("installation");

  const currentCategory = pricingCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section id="pricing" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Прайс-лист на услуги
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Окончательная стоимость
            определяется после осмотра объекта.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-100 dark:bg-zinc-700">
                  <th className="text-left px-6 py-4 text-zinc-900 dark:text-white font-semibold">
                    Услуга
                  </th>
                  <th className="text-left px-6 py-4 text-zinc-900 dark:text-white font-semibold hidden sm:table-cell">
                    Примечание
                  </th>
                  <th className="text-right px-6 py-4 text-zinc-900 dark:text-white font-semibold">
                    Цена
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700">
                {currentCategory?.items.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="text-zinc-900 dark:text-white font-medium">
                        {item.service}
                      </div>
                      <div className="text-zinc-500 dark:text-zinc-400 text-sm sm:hidden mt-1">
                        {item.note}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400 text-sm hidden sm:table-cell">
                      {item.note}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-blue-600 dark:text-blue-400 font-bold whitespace-nowrap">
                        {item.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
            <p className="text-white/90 mb-4">
              Нужен точный расчёт? Оставьте заявку — перезвоним и рассчитаем
              стоимость бесплатно!
            </p>
            <a
              href="tel:+79001234567"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
            >
              <span>📞</span>
              <span>Получить расчёт</span>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-2xl">
              ✅
            </div>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white">
                Гарантия
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                До 3 лет на все работы
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl">
              🚗
            </div>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white">
                Выезд бесплатно
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                В пределах города
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-2xl">
              💳
            </div>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white">
                Оплата
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Наличные, карта, перевод
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
