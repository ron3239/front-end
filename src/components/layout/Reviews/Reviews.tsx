'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Reviews.module.scss';

//todo доделать слайдер начать с авторизацией


const reviews = [
  { id: 1, avatar: '/images/ava1.jpg', name: 'Арс', status: 'был(а) недавно', text: 'чётко быстро сделал', time: '12:34' },
  { id: 2, avatar: '/images/ava2.jpg', name: 'Алик', status: 'В сети', text: 'Все также быстро, четко. Советую. Лучший тип', time: '12:34' },
  { id: 3, avatar: '/images/ava3.jpg', name: 'Плюшик', status: 'Был(а) 5 минут назад', text: 'Все быстро, качественно, девешо. Покупайте у @q0unique0', time: '12:34' },
  { id: 4, avatar: '/images/ava4.jpg', name: 'ариша', status: 'Был(а) 20 минут назад', text: 'Доверяю, беру не первый раз. Быстро, вежливо. Обращайтесь))', time: '22:59' },
  { id: 5, avatar: '/images/ava5.jpg', name: 'Dofamine', status: 'Был(а) недавно', text: 'Сделал ве быстро и четко, рекомендую данного человека, почаще буду покупать звезды', time: '09:59' },
  { id: 6, avatar: '/images/ava6.jpg', name: 'Sleppy', status: 'Был(а) недавно', text: 'Самый лучший и надежный продавец', time: '10:44' },
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <section id="reviews" className={styles.reviews_section}>
      <div className={styles.container}>
        <div className={styles.message__black}>
          <p>Есть отзывы?</p>
          <p className={styles.time}>11:56</p>
        </div>
        <div className={styles.reviewsLinks}>
          <Link href="https://t.me/q0unique0" className={styles.write__reviews_link}>
            &lt; оставить отзыв
          </Link>
          <Link href="https://t.me/misstxbp" className={styles.allReviewsLink}>
            читать все &gt;
          </Link>
        </div>
        <div className={styles.reviews__navigation}>
          <button onClick={prevSlide} className={styles.navButton}>
            <Image src="/images/back.svg" alt="Previous" width={24} height={24} />
          </button>
          <button onClick={nextSlide} className={styles.navButton}>
            <Image src="/images/next.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className={styles.container}>

      <div className={styles.swiperContainer}>
        <div className={styles.swiperWrapper}>
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`${styles.swiperSlide} ${index === currentIndex ? styles.active : ''}`}
            >
              <div className={`${styles.messageBlue} ${styles.card}`}>
                <div className={styles.cardPerson}>
                  <Image 
                    src={review.avatar} 
                    alt="" 
                    className={styles.personAva} 
                    width={50}
                    height={50}
                  />
                  <div className={styles.personText}>
                    <p className={styles.personName}>{review.name}</p>
                    <p className={styles.personStatus}>{review.status}</p>
                  </div>
                </div>
                <p>{review.text}</p>
                <p className={styles.time}>{review.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.swiperPagination}>
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};