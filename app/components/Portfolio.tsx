"use client";

import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Офис IT-компании",
    category: "commercial",
    description: "Установка 12 сплит-систем с централизованным управлением",
    specs: "Samsung Wind-Free, общая мощность 36 кВт",
    image: "🏢",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Загородный дом",
    category: "residential",
    description: "Мульти-сплит система на 5 комнат",
    specs: "Daikin, инверторная технология",
    image: "🏡",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Ресторан «Восток»",
    category: "commercial",
    description: "Кондиционирование зала на 80 посадочных мест",
    specs: "Mitsubishi Electric, канальный тип",
    image: "🍽️",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    title: "Квартира-студия",
    category: "residential",
    description: "Установка с нестандартной трассой 8 метров",
    specs: "Haier, 2.5 кВт",
    image: "🏠",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Серверная комната",
    category: "commercial",
    description: "Прецизионное кондиционирование 24/7",
    specs: "Emerson, точность ±0.5°C",
    image: "🖥️",
    color: "from-slate-500 to-zinc-600",
  },
  {
    id: 6,
    title: "Стоматология",
    category: "commercial",
    description: "Установка в 4 кабинетах с бактерицидными фильтрами",
    specs: "LG, система очистки воздуха",
    image: "🏥",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 7,
    title: "Пентхаус",
    category: "residential",
    description: "VRF-система с дизайнерскими панелями",
    specs: "Toshiba, площадь 200 м²",
    image: "🌆",
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: 8,
    title: "Фитнес-клуб",
    category: "commercial",
    description: "Система вентиляции и кондиционирования",
    specs: "Carrier, производительность 15000 м³/ч",
    image: "💪",
    color: "from-red-500 to-orange-500",
  },
];

const filters = [
  { id: "all", label: "Все работы" },
  { id: "residential", label: "Жилые объекты" },
  { id: "commercial", label: "Коммерческие" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<
    (typeof portfolioItems)[0] | null
  >(null);

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-white dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Наши работы
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Более 1500 успешно выполненных проектов. От небольших квартир до
            крупных коммерческих объектов.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div
                className={`relative aspect-square rounded-2xl bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between overflow-hidden transition-transform hover:scale-[1.02]`}
              >
                {/* Icon */}
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  {item.image}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-white/70 text-sm mb-1">
                    {item.category === "residential"
                      ? "Жилой объект"
                      : "Коммерческий"}
                  </div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    Подробнее
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white dark:bg-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`bg-gradient-to-br ${selectedItem.color} p-8 text-center`}
              >
                <div className="text-8xl mb-4">{selectedItem.image}</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {selectedItem.category === "residential"
                    ? "Жилой объект"
                    : "Коммерческий объект"}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  {selectedItem.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {selectedItem.description}
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-4">
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                    Оборудование
                  </div>
                  <div className="text-zinc-900 dark:text-white font-medium">
                    {selectedItem.specs}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="mt-6 w-full py-3 bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-white rounded-xl font-medium hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Хотите увидеть больше примеров или обсудить ваш проект?
          </p>
          <a
            href="https://wa.me/79001234567?text=Здравствуйте! Хочу обсудить проект"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
          >
            <span>💬</span>
            <span>Написать в WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
