```markdown
# 🌟 Stars Purchase Platform

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://react.dev/)

Платформа для покупки звезд с интеграцией TON blockchain и платежных систем.

## 🚀 Особенности

- **Next.js 13+** с App Router
- **Полная TypeScript** поддержка
- Интеграция с **TON Blockchain**
- Платежи через **Yookassa**
- Адаптивный UI с **SCSS модулями**
- Состояние через **Redux Toolkit**
- **Prisma** для работы с базой данных
- API роуты для обработки транзакций

## 📂 Структура проекта


front-end/
├── public/            # Статические ресурсы
│   └── images/        # Изображения и иконки
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── api/       # API endpoints
│   │   │   ├── buyStar/
│   │   │   ├── findRecipient/
│   │   │   └── payment/
│   │   ├──  
│   │   ├── layout.tsx # Главный layout
│   │   
│   ├── components/    # UI компоненты
│   │   ├── layout/    # Основные секции
│   │   └── UX/        # Элементы интерфейса
│   ├── store/         # Redux хранилище
│   ├── utils/         # Вспомогательные модули
│   │   ├── Fragment.ts # API для Fragment
│   │   └── TonClient.ts # TON интеграция
├── prisma/            # Схема БД
├── .env               # Переменные окружения
└── next.config.ts     # Конфиг Next.js
```

## 🛠 Установка

1. Клонировать репозиторий:
```bash
git clone https://github.com/yourusername/stars-purchase.git
cd stars-purchase
```

2. Установить зависимости:
```bash
npm install
```

3. Настроить окружение:
```bash
cp .env.example .env
# Заполнить необходимые переменные
```

4. Запустить проект:
```bash
npm run dev
```

## 🔧 Конфигурация

Обязательные переменные окружения (`.env`):

```ini
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_FRAGMENT_HASH=your_fragment_hash
NEXT_FRAGMENT_TOKEN=your_fragment_token
YOOKASSA_SHOP_ID=your_shop_id
YOOKASSA_SECRET_KEY=your_secret_key
DATABASE_URL=postgres://user:pass@localhost:5432/stars_db
```

## 🧩 Основные технологии

- **Frontend**: 
  ![Next.js](https://img.shields.io/badge/-Next.js-000?logo=next.js)
  ![React](https://img.shields.io/badge/-React-61DAFB?logo=react)
  ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript)
  ![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux)
  
- **Стили**: 
  ![SCSS](https://img.shields.io/badge/-SCSS-CC6699?logo=sass)
  
- **Блокчейн**: 
  ![TON](https://img.shields.io/badge/-TON-0088CC?logo=telegram)
  
- **Платежи**: 
  ![Yookassa](https://img.shields.io/badge/-Yookassa-FFDE00)

## 🌐 API Endpoints

| Метод | Путь                | Описание                |
|-------|---------------------|-------------------------|
| POST  | /api/findRecipient  | Поиск получателя звезд  |
| POST  | /api/buyStar        | Инициировать покупку    |
| POST  | /api/payment        | Обработка платежа       |
| POST  | /api/webhook        | Вебхук для уведомлений  |

## 📝 Лицензия

MIT License. Смотрите файл [LICENSE](LICENSE) для подробностей.

---

> **Pet-project** разработан с ❤️ для изучения современных веб-технологий  
> По вопросам: your.email@example.com  
> [Демо](https://your-demo-link.com) | [Документация](#) | [Чейнджлог](#)
```

Этот README включает:
1. Четкое описание функционала
2. Визуализацию структуры проекта
3. Инструкции по установке
4. Перечень технологий с иконками
5. Описание API
6. Лицензионную информацию

Вы можете дополнить его:
- Скриншотами интерфейса
- GIF-демонстрациями работы
- Более детальным описанием архитектуры
- Roadmap будущих улучшений
- Инструкциями по деплою
```