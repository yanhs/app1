"use client";

import { useEffect, useRef, useState } from "react";

const advantages = [
  {
    icon: "🏆",
    title: "10+ лет опыта",
    description: "Работаем с 2014 года, выполнили более 1500 проектов",
  },
  {
    icon: "📜",
    title: "Лицензии и сертификаты",
    description: "Официальный партнёр ведущих производителей",
  },
  {
    icon: "⚡",
    title: "Быстрый выезд",
    description: "Приезжаем в день обращения или в удобное время",
  },
  {
    icon: "🛡️",
    title: "Гарантия до 3 лет",
    description: "Отвечаем за качество всех выполненных работ",
  },
  {
    icon: "💰",
    title: "Честные цены",
    description: "Без скрытых платежей, фиксируем стоимость в договоре",
  },
  {
    icon: "🔧",
    title: "Оригинальные запчасти",
    description: "Используем только сертифицированные комплектующие",
  },
];

const team = [
  {
    name: "Александр Петров",
    role: "Основатель, главный инженер",
    experience: "15 лет опыта",
    avatar: "👨‍🔧",
  },
  {
    name: "Дмитрий Сидоров",
    role: "Старший мастер",
    experience: "10 лет опыта",
    avatar: "👷",
  },
  {
    name: "Михаил Козлов",
    role: "Инженер-монтажник",
    experience: "7 лет опыта",
    avatar: "🧑‍🔧",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            О компании
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            КлиматПро — это команда профессионалов, которая обеспечит комфортный
            климат в вашем доме или офисе.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Story */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Наша история
            </h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
              <p>
                Компания КлиматПро была основана в 2014 году группой
                энтузиастов, которые решили изменить подход к сервису
                климатической техники в России.
              </p>
              <p>
                За эти годы мы выросли из небольшой мастерской в полноценную
                сервисную компанию с командой из 15 сертифицированных
                специалистов.
              </p>
              <p>
                Сегодня мы обслуживаем частных клиентов, офисы, рестораны,
                торговые центры и промышленные объекты по всей Москве и
                Московской области.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  1500+
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  Проектов
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  15
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  Специалистов
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  98%
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  Довольных
                </div>
              </div>
            </div>
          </div>

          {/* Right - Team */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Наша команда
            </h3>
            <div className="space-y-4">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className={`flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-3xl">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-zinc-900 dark:text-white">
                      {member.name}
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {member.role}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      {member.experience}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Почему выбирают нас
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className={`p-6 bg-white dark:bg-zinc-800 rounded-xl transition-all duration-500 hover:shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">
                  {advantage.title}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
