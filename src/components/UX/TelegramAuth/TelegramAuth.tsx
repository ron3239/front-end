'use client'
import { useEffect } from "react";

export const TelegramAuth = () => {
  useEffect(() => {
    // 1. Создаем скрипт виджета
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    
    // 2. Настройки виджета
    script.setAttribute('data-telegram-login', 'ShopMisst_bot'); // Замените на username вашего бота
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', '/api/auth/telegram'); // URL вашего API
    script.setAttribute('data-request-access', 'write');
    
    // 3. Добавляем скрипт в DOM
    const container = document.getElementById('telegram-auth-container');
    container?.appendChild(script);

    return () => {
      container?.removeChild(script);
    };
  }, []);

  return <div id="telegram-auth-container" className="mt-4"></div>;
};