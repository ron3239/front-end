"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.header_nav}>
          <Link href="/" className={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={105}
              height={68}
              className={styles.header__logo}
              priority
            />
          </Link>

          <ul className={`${styles.header__list} ${isMenuOpen ? styles.open : ""}`}>
            <li className={styles.header__item}>
              <Link
                className={styles.header__link}
                href="#banner"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
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
                rel="noopener noreferrer"
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
            className={`${styles.menu_btn} ${isMenuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};