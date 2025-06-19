import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brand}>
          <Image 
            className={styles.headerLogo} 
            src={'/images/logo.svg'} 
            alt="Logo" 
            width={105} 
            height={68}
          />
          <p className={styles.copyright}>
            © 2025 Shop by Misst<br />
          </p>
        </div>
        <div className={styles.contact}>
          {/* Contact information if needed */}
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerBottom}>
        <div className={styles.legalLinks}>
          <Link href="#" className={styles.link}>Публичная оферта</Link>
          <Link href="#" className={styles.link}>Политика защиты и обработки персональных данных</Link>
        </div>
        
        <div className={styles.mainLinks}>
          <Link href="#howItWorks" className={styles.link}>Как это работает</Link>
          <Link href="#reviews" className={styles.link}>Отзывы</Link>
          <Link href="#buy" className={styles.link}>Купить</Link>
          <Link href="https://t.me/q0unique0" target="_blank" className={styles.footerLink}>
            Поддержка 
            <Image 
              className={styles.telegramIcon} 
              src={'/images/telegram.png'} 
              alt="Telegram" 
              width={30} 
              height={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};