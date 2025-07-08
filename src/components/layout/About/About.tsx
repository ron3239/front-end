import Image from 'next/image';
import styles from './About.module.scss';

export const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.aboutContent}>
            <p>Более <span className={styles.gold}>800+</span> отзывов</p>
            <Image 
              src="/images/StarStruck.png" 
              alt="Star Struck" 
              width={153}
              height={153}
            />
          </div>
          <span className={styles.aboutStick}></span>
          <div className={styles.aboutContent}>
            <p><span className={styles.gold}>Лучшая</span> цена на рынке</p>
            <Image 
              src="/images/stPlace.png" 
              alt="1st Place" 
              width={181}
              height={181}
            />
          </div>
          <span className={styles.aboutStick}></span>
          <div className={styles.aboutContent}>
            <p><span className={styles.gold}>Надежная</span> поддержка</p>
            <Image 
              src="/images/Technologist.png" 
              alt="Technologist" 
              width={191}
              height={191}
            />
          </div>
        </div>
      </div>
    </section>
  );
};