"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.header_nav}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={105}
              height={68}
              className={styles.header__logo}
            />
          </Link>

          <ul
            className={`${styles.header__list} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            <li className={styles.header__item}>
              <Link
                className={styles.header__link}
                href="#reviews"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link
                className={styles.header__link}
                href="#buy"
                onClick={() => setIsMenuOpen(false)}
              >
                Купить
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link
                className={styles.header__link}
                href="https://t.me/q0unique0"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                Поддержка{" "}
                <Image
                  src="/images/telegram.png"
                  alt="Telegram"
                  width={30}
                  height={30}
                  className={styles.telegram}
                />
              </Link>
            </li>
          </ul>
          <button
            className={`${styles.menu_btn} ${isMenuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
