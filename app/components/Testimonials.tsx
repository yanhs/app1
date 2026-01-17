"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Анна Михайлова",
    role: "Владелец квартиры",
    avatar: "👩",
    rating: 5,
    text: "Отличная работа! Установили кондиционер быстро и аккуратно. Мастер всё объяснил, показал как пользоваться. Уже второй год работает без проблем.",
    date: "2 недели назад",
  },
  {
    id: 2,
    name: "Сергей Петров",
    role: "Директор офиса",
    avatar: "👨‍💼",
    rating: 5,
    text: "Заказывали установку 8 кондиционеров в офис. Всё сделали за 2 дня, не мешая работе сотрудников. Очень профессиональный подход.",
    date: "1 месяц назад",
  },
  {
    id: 3,
    name: "Елена Козлова",
    role: "Домохозяйка",
    avatar: "👩‍🦰",
    rating: 5,
    text: "Вызывали на чистку кондиционера. Мастер приехал вовремя, всё почистил, показал фото до и после. Кондиционер стал работать как новый!",
    date: "3 недели назад",
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    role: "Владелец ресторана",
    avatar: "👨‍🍳",
    rating: 5,
    text: "Сотрудничаем уже 3 года. Обслуживают систему кондиционирования в ресторане. Всегда быстро реагируют на вызовы, цены адекватные.",
    date: "1 неделю назад",
  },
  {
    id: 5,
    name: "Ольга Новикова",
    role: "Менеджер",
    avatar: "👩‍💻",
    rating: 5,
    text: "Срочно нужно было починить кондиционер перед жарой. Приехали в тот же день, нашли утечку и всё исправили. Спасибо огромное!",
    date: "2 месяца назад",
  },
  {
    id: 6,
    name: "Алексей Соколов",
    role: "Программист",
    avatar: "👨‍💻",
    rating: 5,
    text: "Устанавливали кондиционер в квартиру. Всё чётко: замеры, установка, проверка. Особенно понравилось, что убрали за собой весь мусор.",
    date: "1 месяц назад",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Нам доверяют более 1500 клиентов. Вот что они говорят о нашей работе.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="text-4xl font-bold text-zinc-900 dark:text-white">
            4.9
          </div>
          <div>
            <div className="flex gap-1 text-yellow-400 text-xl">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              На основе 247 отзывов
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors hidden md:flex"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors hidden md:flex"
          >
            <svg
              className="w-6 h-6"
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
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 h-full shadow-lg">
                    {/* Rating */}
                    <div className="flex gap-1 text-yellow-400 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-zinc-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="text-xs text-zinc-400 dark:text-zinc-500">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-8 bg-blue-600"
                    : "bg-zinc-300 dark:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-lg flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
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
          </button>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Оставьте свой отзыв о нашей работе
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
          >
            <span>✍️</span>
            <span>Написать отзыв</span>
          </a>
        </div>
      </div>
    </section>
  );
}
