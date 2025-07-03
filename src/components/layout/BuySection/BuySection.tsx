'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './BuySection.module.scss';
import axios from 'axios';


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
  const [selectedStars, setSelectedStars] = useState<number>(50);
  const [username, setUsername] = useState<string>('');
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки данных
    console.log({ username, stars: selectedStars });
    // Дальнейшая обработка (например, отправка на API)

    const response = await axios.post(`/api/buyStar`,{username:username,quantity:selectedStars});
    console.log(response);

  };

  const handleStarsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 50 && value <= 50000) {
      setSelectedStars(value);
    }
  };

  const getPriceForStars = (stars: number) => {
    const option = starOptions.find(opt => opt.value === stars);
    return option ? option.price : stars * 1.5; // Дефолтная формула если не нашли в options
  };



  return (
    <section id="buy" className={styles.orderSection}>
      <div className={styles.container}>
        <form className={styles.orderForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.usernameLabel}>
              <Image 
                src="/images/Glass.svg" 
                alt="Иконка пользователя" 
                width={24} 
                height={24}
                className={styles.icon}
              />
              Username в телеграм
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.inputField}
              placeholder="Ваш @username"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="stars">
              <Image 
                src="/images/premStar.svg" 
                alt="Иконка звезды" 
                width={20} 
                height={20}
                className={styles.icon}
              />
              Количество от 50 до 50000
            </label>
            <input
              type="number"
              id="stars"
              name="stars"
              min="50"
              max="50000"
              required
              value={selectedStars}
              onChange={handleStarsChange}
              className={styles.inputField}
            />
          </div>

          <div className={styles.starsSelection}>
            <div className={styles.starsGrid}>
              {starOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`${styles.starOption} ${
                    selectedStars === option.value ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedStars(option.value)}
                >
                  <div className={styles.starOptionLeft}>
                    {Array.from({ length: option.stars }).map((_, i) => (
                      <Image
                        key={i}
                        src="/images/premStar.svg"
                        alt="Звезда"
                        width={20}
                        height={20}
                        className={styles.starIcon}
                      />
                    ))}
                    <span>{option.label}</span>
                  </div>
                  <span className={styles.price}>{option.price}₽</span>
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.buyButton}>
            Купить за {getPriceForStars(selectedStars)}₽
          </button>
        </form>
      </div>
    </section>
  );
};