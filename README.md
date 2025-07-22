markdown
# 🌟 Stars Purchase Platform

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://react.dev/)

Платформа для покупки звезд с интеграцией TON blockchain и платежных систем.

## 🚀 Особенности

- **Next.js 15+** с App Router
- **Полная TypeScript** поддержка
- Интеграция с **TON Blockchain**
- Платежи через **Yookassa**
- Адаптивный UI с **SCSS модулями**
- Состояние через **Redux Toolkit**
- API роуты для обработки транзакций

## 📂 Структура проекта


```
└── 📁front-end
    └── 📁public
        └── 📁images
            ├── avatarGroup.png
            ├── close.png
            ├── instruction-button.png
            ├── instruction-input_star.png
            ├── instruction-select_star.png
            ├── instruction-username.png
            ├── logo.svg
            ├── premStar.svg
            ├── rocket.png
            ├── Star.webp
            ├── StarStruck.png
            ├── stPlace.png
            ├── Technologist.png
    └── 📁src
        └── 📁app
            └── 📁(Home)
                ├── Home.tsx
                ├── page.tsx
                ├── providers.tsx
            └── 📁api
                └── 📁buyStar
                    ├── route.ts
                └── 📁payment
                    ├── route.ts
                └── 📁webhook
                    ├── route.ts
            ├── favicon.ico
            ├── globals.css
            ├── layout.tsx
        └── 📁components
            └── 📁layout
                └── 📁About
                    ├── About.module.scss
                    ├── About.tsx
                └── 📁Banner
                    ├── Banner.module.scss
                    ├── Banner.tsx
                └── 📁BuySection
                    ├── BuySection.module.scss
                    ├── BuySection.tsx
                └── 📁Footer
                    ├── Footer.module.scss
                    ├── Footer.tsx
                └── 📁Header
                    ├── Header.module.scss
                    ├── Header.tsx
                ├── index.ts
            └── 📁UX
                └── 📁Instruction
                    ├── Instruction.module.scss
                    ├── Instruction.tsx
                └── 📁Loading
                    ├── Loading.module.scss
                    ├── Loading.tsx
                └── 📁TermsModal
                    ├── TermsModal.module.scss
                    ├── TermsModal.tsx
            ├── index.ts
        └── 📁store
            └── 📁instruction
                ├── instructionSlice.ts
            └── 📁statePay
                ├── stateSlice.ts
            ├── index.ts
        └── 📁types
            ├── IForm.ts
        └── 📁utils
            ├── Fragment.ts
            ├── TonClient.ts
            ├── Yookassa.ts
    ├── .gitignore
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    └── tsconfig.json
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
  ![React](https://img.shields.io/badge/-ReactJs-99a1b333?logo=react&logoColor=58c4dc)
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