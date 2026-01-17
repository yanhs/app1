"use client";

import { useState } from "react";

const workingHours = [
  { day: "Понедельник", hours: "8:00 – 21:00" },
  { day: "Вторник", hours: "8:00 – 21:00" },
  { day: "Среда", hours: "8:00 – 21:00" },
  { day: "Четверг", hours: "8:00 – 21:00" },
  { day: "Пятница", hours: "8:00 – 21:00" },
  { day: "Суббота", hours: "9:00 – 20:00" },
  { day: "Воскресенье", hours: "10:00 – 18:00" },
];

const getCurrentDay = () => {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return days[new Date().getDay()];
};

export default function Map() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const currentDay = getCurrentDay();

  return (
    <section id="map" className="py-20 px-4 bg-white dark:bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Как нас найти
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Наш офис расположен в центре города. Вы можете приехать для
            консультации или оформления заказа.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-video lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-700">
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2 animate-pulse">🗺️</div>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Загрузка карты...
                    </p>
                  </div>
                </div>
              )}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=37.5%2C55.7%2C37.7%2C55.8&layer=mapnik&marker=55.75%2C37.6"
                className="w-full h-full border-0"
                loading="lazy"
                onLoad={() => setIsMapLoaded(true)}
                title="Карта расположения офиса"
              />
            </div>

            {/* Address Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">
                    г. Москва, ул. Примерная, д. 123
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    Офис 45, 4 этаж, БЦ «Климат»
                  </div>
                  <a
                    href="https://yandex.ru/maps/-/CDxZqW~r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                  >
                    Построить маршрут →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Working Hours */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span>🕐</span>
                <span>Режим работы</span>
              </h3>
              <ul className="space-y-2">
                {workingHours.map((item) => (
                  <li
                    key={item.day}
                    className={`flex justify-between text-sm ${
                      item.day === currentDay
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.day === currentDay && (
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                      )}
                      {item.day}
                    </span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4">Быстрая связь</h3>
              <div className="space-y-3">
                <a
                  href="tel:+79001234567"
                  className="flex items-center gap-3 hover:bg-white/10 rounded-lg p-2 -mx-2 transition-colors"
                >
                  <span className="text-xl">📞</span>
                  <span>+7 900 123-45-67</span>
                </a>
                <a
                  href="https://wa.me/79001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-white/10 rounded-lg p-2 -mx-2 transition-colors"
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:info@climatpro.ru"
                  className="flex items-center gap-3 hover:bg-white/10 rounded-lg p-2 -mx-2 transition-colors"
                >
                  <span className="text-xl">✉️</span>
                  <span>info@climatpro.ru</span>
                </a>
              </div>
            </div>

            {/* Transport */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span>🚇</span>
                <span>Как добраться</span>
              </h3>
              <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <div>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    Метро:
                  </span>{" "}
                  Центральная (5 мин пешком)
                </div>
                <div>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    Автобус:
                  </span>{" "}
                  №15, 23, 45 – ост. «Примерная»
                </div>
                <div>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    Парковка:
                  </span>{" "}
                  Бесплатная у здания
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
