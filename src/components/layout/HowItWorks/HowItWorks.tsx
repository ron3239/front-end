import Image from 'next/image';
import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.message__black}>
          <p>Как это работает?</p>
          <p className={styles.time}>11:17</p>
        </div>
        <div className={styles.howItWork}>
          <Image 
            className={styles.lock} 
            src="/images/lock.png" 
            alt="Lock" 
            width={622}
            height={612}
          />
          <div className={`${styles.message__blue} ${styles.howItWork__text_block}`}>
            <p className={styles.howItWork__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur, 
              deserunt dignissimos et illum excepturi? Sequi vitae excepturi voluptates, labore 
              animi dolorem iure eius obcaecati, facere quibusdam, dolorum rem eum error enim 
              id dignissimos totam fugit. Illo modi cupiditate tenetur, odio rem alias accusamus 
              illum dolorem aut harum totam inventore.
            </p>
            <p className={styles.time}>11:23</p>
          </div>
        </div>
      </div>
    </section>
  );
};