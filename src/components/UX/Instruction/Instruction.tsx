import React, { FC } from "react";
import Image from "next/image";
import styles from "./Instruction.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setOpen } from "@/store/instruction/instructionSlice";

export const Instruction: FC = () => {
    const isOpen = useSelector((state: RootState) => state.instruction.isOpen );
    const dispatch = useDispatch()
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay} onClick={() => dispatch(setOpen())}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.closeButton}
          onClick={() => dispatch(setOpen())}
          aria-label="Закрыть инструкцию"
        >
          <Image
            src="/images/close.png"
            width={24}
            height={24}
            alt="Закрыть"
          />
        </button>
        
        <h2 className={styles.title}>Инструкция по покупке звёзд</h2>
        
        <div className={styles.step}>
          <div className={styles.stepHeader}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Введите Telegram username</h3>
          </div>
          <div className={styles.stepContent}>
            <Image
              src="/images/instruction-username.png"
              width={400}
              height={100}
              alt="Пример ввода username"
              className={styles.exampleImage}
              priority
            />
            <ul className={styles.tipsList}>
              <li>Никнейм без символа @</li>
              <li>Только латинские буквы, цифры и подчеркивание</li>
              <li>Пример: <code>username123</code></li>
            </ul>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepHeader}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Выберите количество звёзд</h3>
          </div>
          <div className={styles.stepContent}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <Image
                  src="/images/instruction-select_star.png"
                  width={300}
                  height={200}
                  alt="Пример выбора пакета звёзд"
                  className={styles.exampleImage}
                  priority
                />
                <p>Выберите один из готовых пакетов</p>
              </div>
              <div className={styles.column}>
                <Image
                  src="/images/instruction-input_star.png"
                  width={300}
                  height={100}
                  alt="Пример ввода своего количества"
                  className={styles.exampleImage}
                  priority
                />
                <p>Или введите своё количество (от 50 до 5000)</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepHeader}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Завершите покупку</h3>
          </div>
          <div className={styles.stepContent}>
            <Image
              src="/images/instruction-button.png"
              width={400}
              height={80}
              alt="Пример кнопки отправки"
              className={styles.exampleImage}
              priority
            />
            <p>Нажмите "Продолжить" и следуйте инструкциям платежной системы</p>
          </div>
        </div>

        <div className={styles.note}>
          <h3 className={styles.noteTitle}>❗❗❗</h3>
          <p>Звёзды будут зачислены в течение 5 минут после оплаты</p>
        </div>
      </div>
    </div>
  );
};

Instruction.displayName = "Instruction";