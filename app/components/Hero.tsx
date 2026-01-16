"use client";

import { useState } from "react";

const ideas = [
  "Создай приложение для отслеживания привычек",
  "Разработай онлайн-редактор заметок",
  "Сделай генератор паролей",
  "Построй чат-бот с AI",
  "Напиши трекер расходов",
];

export default function Hero() {
  const [idea, setIdea] = useState<string | null>(null);

  const getRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    setIdea(ideas[randomIndex]);
  };

  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        Генератор идей
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
        Не знаешь что создать? Нажми на кнопку и получи случайную идею для проекта!
      </p>
      <button
        onClick={getRandomIdea}
        className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity"
      >
        Получить идею
      </button>
      {idea && (
        <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg max-w-md">
          <p className="text-lg font-medium text-black dark:text-white">
            {idea}
          </p>
        </div>
      )}
    </section>
  );
}
