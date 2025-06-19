'use client';
import Image from 'next/image';
import {  useState } from 'react';
import styles from './BuySection.module.scss';

const starOptions = [
  { value: 50, label: "50 Звезд", price: 75, stars: 1 },
  { value: 100, label: "100 Звезд", price: 150, stars: 1 },
  { value: 150, label: "150 Звезд", price: 225, stars: 2 },
  { value: 250, label: "250 Звезд", price: 375, stars: 2 },
  { value: 500, label: "500 Звезд", price: 750, stars: 3 },
  { value: 1000, label: "1K Звезд", price: 1_500, stars: 3 },
  { value: 5000, label: "5K Звезд", price: 7_500, stars: 3 },
  { value: 10000, label: "10K Звезд", price: 15_000, stars: 4 },
  { value: 25000, label: "25K Звезд", price: 37_500, stars: 4 },
  { value: 50000, label: "50K Звезд", price: 75_000, stars: 4 },
];

export const BuySection = () => {
  const [selectedStars, setSelectedStars] = useState<number | null>(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <section id="buy" className={styles.orderSection}>
      <div className={styles.container}>
        <form className={styles.orderForm} onSubmit={handleSubmit}>
                          <div className="form-group">
                    <label className="username"><Image src="images/Glass.svg" alt="" width={51} height={51}/> Username в телеграмм</label>
                    <input type="text" id="username" name="username" required/>
                </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="stars">
              <Image src="/images/premStar.svg" alt="" width={20} height={20} />
              Количество от 50 до 50000
            </label>
            <input
              type="number"
              id="stars"
              name="stars"
              min="50"
              max="50000"
              required
              value={selectedStars || ''}
              onChange={(e) => setSelectedStars(Number(e.target.value))}
            />
          </div>
          <div className={styles.starsSelection}>
            <div className={styles.starsGrid}>
              {starOptions.map((option) => (
                <label key={option.value} className={styles.starOption}>
                  <div className={styles.starOptionLeft}>
                    <input
                      type="radio"
                      name="stars"
                      value={option.value}
                      checked={selectedStars === option.value}
                      onChange={() => setSelectedStars(option.value)}
                      className={styles.radioInput}
                      required
                    />
                    {Array.from({ length: option.stars }).map((_, i) => (
                      <Image
                        key={i}
                        src="/images/premStar.svg"
                        alt=""
                        width={50}
                        height={50}
                        className={`${styles.starOptionImg} ${i > 0 ? styles[`star${i + 1}`] : ''}`}
                      />
                    ))}
                    {option.label}
                  </div>
                  <p>{option.price}₽</p>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.buyButton}>
            Купить { selectedStars!=null? `за ${selectedStars}₽`:""}
          </button>
        </form>
      </div>
    </section>
  );
};