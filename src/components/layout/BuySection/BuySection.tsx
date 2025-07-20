"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./BuySection.module.scss";
import axios from "axios";
import { useDispatch, } from "react-redux";
import { setOpen } from "@/store/instruction/instructionSlice";
// import { useRouter } from "next/navigation";


const starOptions = [
  { value: 50, label: "50 Звезд", stars: 1 },
  { value: 100, label: "100 Звезд", stars: 1 },
  { value: 150, label: "150 Звезд", stars: 2 },
  { value: 250, label: "250 Звезд", stars: 2 },
  { value: 500, label: "500 Звезд", stars: 3 },
  { value: 1000, label: "1K Звезд", stars: 3 },
  { value: 5000, label: "5K Звезд", stars: 3 },
  { value: 10000, label: "10K Звезд", stars: 4 },
  { value: 25000, label: "25K Звезд", stars: 4 },

];

export const BuySection = () => {
  const [selectedStars, setSelectedStars] = useState<string>("50");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // const router = useRouter()

  // Проверка является ли значение числом
  const isNumeric = (value: string): boolean => {
    return !isNaN(parseFloat(value)) && isFinite(Number(value));
  };

  // Корректировка значения звезд
  const validateStars = (value: string): string => {
    if (!isNumeric(value)) return "50";

    const numValue = Number(value);
    if (numValue < 50) return "50";
    if (numValue > 50000) return "50000";
    return value;
  };

  // Обработчик изменения количества звезд
  const handleStarsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStars(e.target.value);
  };

  // Обработчик потери фокуса
  const handleBlur = () => {
    setSelectedStars(validateStars(selectedStars));
  };

  // Форматирование цены
  const formatPrice = (stars: string): string => {
    const numStars = isNumeric(stars) ? Number(stars) : 50;
    const price = Math.round(numStars * 1.37 * 1.025);
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Финализируем проверку числа перед отправкой
    const finalStars = validateStars(selectedStars);
    setSelectedStars(finalStars);

    if (!username.trim()) {
      alert("Пожалуйста, введите ваш username");
      return;
    }

    try {
      setIsLoading(true);
      axios.post("https://api/buyStar",{username,selectedStars}).then((response) => {console.log(response)})
    //   const response = await axios.post("/api/payment", {
    //     username: username.trim(),
    //     quantity: Number(finalStars),
    //     price: Number(formatPrice(finalStars)),
    //   });
    //   console.log(response.data);
    //  window.location.href = response.data.confirmation_url;
    } catch (error) {
      console.error("Ошибка при оформлении покупки:", error);
      alert("Произошла ошибка при оформлении покупки");
    } finally {
      setIsLoading(false);
    }
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
              placeholder="Ваш username"
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
              required
              min="1"
              placeholder="Введите количество"
              value={selectedStars}
              onChange={handleStarsChange}
              onBlur={handleBlur}
              className={styles.inputField}
            />
            <p className={styles.instruction_text} onClick={()=>dispatch(setOpen())}>
              Инструкция
            </p>
          </div>

          <div className={styles.starsSelection}>
            <div className={styles.starsGrid}>
              {starOptions.map((option) => (
                <button
                  key={option.value}
                  type="submit"
                  className={`${styles.starOption} ${
                    selectedStars === String(option.value)
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() => setSelectedStars(String(option.value))}
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
                  <span className={styles.price}>
                    {formatPrice(String(option.value))}₽
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit" //submit
            // onClick={() => router.push('/buyForm')}
            className={styles.buyButton}
            disabled={isLoading}
          >
            {isLoading
              ? "Обработка..."
              : `Купить за ${formatPrice(selectedStars)}₽`}
          </button>
        </form>
      </div>
    </section>
  );
};
