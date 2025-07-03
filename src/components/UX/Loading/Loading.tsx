'use client';
import React, { FC, JSX } from "react";
import styles from "./Loading.module.scss";
import { CheckCircle, XOctagon } from "react-feather";
import Image from "next/image";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setNull } from "@/store/statePay/stateSlice";

// Определяем тип для статусов
type StatusType = "sending" | "success" | "error";

interface StatusConfig {
  icon: JSX.Element;
  title: string;
  defaultMessage: string;
  color: string;
}

// Конфигурация статусов с явной типизацией
const statusConfig: Record<StatusType, StatusConfig> = {
  sending: {
    icon: (
      <Image
        className={styles.rocketIcon}
        src="/images/rocket.png"
        alt="Отправка"
        width={60}
        height={60}
      />
    ),
    title: "Отправка вашей звезды",
    defaultMessage: "Запускаем звезду в цифровую вселенную...",
    color: "#FFA500",
  },
  success: {
    icon: <CheckCircle className={styles.icon} />,
    title: "Звезда успешно отправлена!",
    defaultMessage: "Ваша звезда теперь сияет в блокчейне TON",
    color: "#4BB543",
  },
  error: {
    icon: <XOctagon className={styles.icon} />,
    title: "Ошибка отправки",
    defaultMessage: "Звезда не смогла взлететь. Попробуйте еще раз",
    color: "#FF3333",
  },
};

export const Loading: FC = () => {
  // Получаем статус с явным приведением типа
  const status = useSelector((state: RootState) => state.status as StatusType);

  const dispatch = useDispatch();

  // Проверяем, что статус допустимый
  const isValidStatus = (status: string): status is StatusType => {
    return status in statusConfig;
  };

  // Получаем текущий статус или fallback
  const currentStatus = isValidStatus(status) 
    ? statusConfig[status]
    : {
        icon: <></>,
        title: "",
        defaultMessage: "",
        color: "",
      };



  if (!status) return null;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div
          className={styles.iconWrapper}
          style={{ color: currentStatus.color }}
        >
          {currentStatus.icon}
        </div>

        <h2 className={styles.title}>{currentStatus.title}</h2>

        {status === "sending" && (
          <div className={styles.progressContainer}>
            <div className={styles.spinner}>
              <svg
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1376a8" />
                    <stop offset="100%" stopColor="#5400fd" />
                  </linearGradient>
                </defs>
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="url(#gradient)"
                />
              </svg>
            </div>
            <span className={styles.progressText}>Идет покупка звезд</span>
          </div>
        )}

        {(status === "success" || status === "error") && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => dispatch(setNull())}
          >
            Закрыть
          </button>
        )}
      </div>
    </div>
  );
};