import Image from 'next/image';
import styles from './Banner.module.scss';

export const Banner = () => {

  return (
    <section id="banner" className={styles.banner__section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.banner__text}>
            <h1 className={styles.banner__h}>
              Telegram <span className="gold">Звёзды</span> <br /> по лучшей цене
            </h1>
            <div className="message__blue">
              <p className={styles.banner__p}>Быстро. Безопасно. Удобно.</p>
              <p className={styles.time}>11:14</p>
            </div>
          </div>
          <Image 
            className={styles.banner_star} 
            src="/images/Star.webp" 
            alt="Star" 
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};