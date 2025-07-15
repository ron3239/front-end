"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { useState } from "react";

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const legalDocuments = [
    {
      title: "Правила использования сервиса misst shop",
      content: `Принимая решение воспользоваться нашим сервисом, вы подтверждаете своё согласие со следующими условиями:

1. Географическая доступность
Сервис не доступен для резидентов США и лиц, связанных с американской юрисдикцией.

2. Правовые требования
Вы обязаны убедиться, что использование сервиса разрешено законодательством вашей страны.

3. Ответственность
Администрация сервиса не несёт ответственности за возможные убытки или ущерб, возникшие в результате его использования

4. Законность операций
Все проводимые транзакции должны соответствовать международному праву и не нарушать санкционные режимы.

5. Информационное назначение
Материалы сервиса носят ознакомительный характер и не являются профессиональной рекомендацией.

6. Технические работы
Мы оставляем за собой право временно ограничивать доступ к некоторым функциям для проведения обновлений.

7. Техническая компетентность
Вы подтверждаете наличие достаточных знаний для безопасного использования криптовалютных сервисов.

8. Правовое соответствие
Использование сервиса должно осуществляться в строгом соответствии с применимым законодательством.

9. Осознание рисков
Вы принимаете на себя все возможные риски, связанные с использованием блокчейн-технологий.

10. Санкционные ограничения
Запрещено использование сервиса лицами и организациями, включёнными в международные санкционные списки.`,
    },
    {
      title: "Политика обработки персональных данных",
      content: `При пользовании нашими сервисами вы автоматически принимаете следующие условия:

1. Собираемые сведения
В процессе работы сервиса мы фиксируем необходимый минимум информации для корректного выполнения заказов и совершенствования качества услуг.

2. Принципы работы с информацией
Все полученные данные хранятся с применением современных средств защиты и используются строго по назначению - для обработки запросов и поддержания обратной связи.

3. Передача данных
Ваши личные сведения не подлежат разглашению третьим сторонам, за исключением ситуаций, когда этого требует законодательство или технические особенности проведения платежей.

4. Принятие условий
Факт использования платформы означает ваше согласие с изложенными правилами.

Порядок возврата платежей

В случае технического сбоя, приведшего к непоставке виртуальных активов в течение суток после оплаты, клиент вправе инициировать процедуру возврата. Возврат производится исключительно на исходный платежный инструмент.

Срок обработки возвратных операций составляет от 2 до 7 банковских дней после одобрения заявки.

Ключевое условие:
возможность возврата сохраняется только до момента попадания транзакции в блокчейн. После фиксации операции в распределенном реестре возврат средств технически невозможен, независимо от наличия ошибок в отображении статуса перевода.`,
    },
  ];

  const openModal = (index: number) => {
    setModalContent(legalDocuments[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <Image
              className={styles.headerLogo}
              src="/images/logo.svg"
              alt="Logo"
              width={105}
              height={68}
              priority
            />
            <p className={styles.copyrightBig}>© 2025 Shop by Misst</p>
            <p className={styles.copyright}>ИП Панов Дмитрий Алексеевич</p>
            <div className={styles.infoDiv}>
              <p className={styles.copyright}>misst2911@gmail.com</p>
              <p className={styles.copyright}>ОРГНИП 325774600422421</p>
              <p className={styles.copyright}>ИНН 972104272153</p>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.footerBottom}>
          <div className={styles.legalLinks}>
            <button
              onClick={() => openModal(0)}
              className={styles.link}
              aria-label="Публичная оферта"
            >
              Публичная оферта
            </button>
            <button
              onClick={() => openModal(1)}
              className={styles.link}
              aria-label="Политика конфиденциальности"
            >
              Политика защиты и обработки персональных данных
            </button>
          </div>

          <div className={styles.mainLinks}>
            <Link
              href="https://t.me/misstxbp"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Отзывы в Telegram"
            >
              Отзывы
            </Link>
            <Link
              href="#buy"
              className={styles.link}
              aria-label="Купить"
            >
              Купить
            </Link>
            <Link
              href="https://t.me/q0unique0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
              aria-label="Поддержка в Telegram"
            >
              Поддержка
              <Image
                className={styles.telegramIcon}
                src="/images/avatarGroup.png"
                alt="Telegram"
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>
        </div>
      </footer>

      {/* Универсальное модальное окно */}
      {showModal && modalContent && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            <div className={styles.modalText}>
              <pre>{modalContent.content}</pre>
            </div>
            <button
              onClick={closeModal}
              className={styles.closeButton}
              aria-label="Закрыть"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};