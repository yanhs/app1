"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 1500, suffix: "+", label: "Выполненных работ" },
  { value: 10, suffix: " лет", label: "На рынке" },
  { value: 98, suffix: "%", label: "Довольных клиентов" },
  { value: 24, suffix: "/7", label: "Поддержка" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
        ❄️
      </div>
      <div
        className="absolute top-40 right-20 text-4xl opacity-20 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        ❄️
      </div>
      <div
        className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        ❄️
      </div>

      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Работаем ежедневно с 8:00 до 21:00
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Профессиональный
          <span className="block text-blue-200">климат-сервис</span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Установка, обслуживание и ремонт кондиционеров. Работаем по всему
          городу с гарантией качества до 3 лет.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="tel:+79001234567"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
          >
            <span className="text-2xl group-hover:animate-pulse">📞</span>
            <span>+7 900 123-45-67</span>
          </a>
          <a
            href="https://wa.me/79001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-xl"
          >
            <span className="text-2xl">💬</span>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <div className="text-blue-200 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
