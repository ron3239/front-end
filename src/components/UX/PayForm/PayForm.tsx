// 'use client'
// import React, { FC, useState } from 'react';
// import styles from './PayForm.module.scss';
// import axios from 'axios';

// export const PayForm: FC = () => {
//   const [amount, setAmount] = useState<number>(1000);
//   const [email, setEmail] = useState<string>('');
//   const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!selectedMethod) {
//       alert('Пожалуйста, выберите способ оплаты');
//       return;
//     }

//     setIsLoading(true);
//     console.log('Отправка данных:', { amount, email, paymentMethod: selectedMethod });
    
//     // Имитация запроса к API
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       alert(`Оплата ${amount} ₽ прошла успешно!`);
//     } catch (error) {
//       console.error('Ошибка оплаты:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const paymentMethods = [
//     { id: 'card', icon: '💳', label: 'Банковская карта' },
//     { id: 'apple', icon: '📱', label: 'Apple Pay' },
//     { id: 'google', icon: '📲', label: 'Google Pay' },
//     { id: 'sbp', icon: '🏦', label: 'СБП' }
//   ];

//   const handlePayment = async () => {
//   try {
//     const response = await axios.post('api/payment')

//     console.log(response.data)
//   }catch{
//     console.log('error')
//   }}

//   return (
//     <div className={styles.payFormContainer}>
//       <form onSubmit={handleSubmit} className={styles.paymentForm}>
//         <h2 className={styles.formTitle}>Оплата заказа</h2>
        
//         <div className={styles.paymentMethods}>
//           <div className={styles.methodTitle}>Способы оплаты:</div>
//           <div className={styles.methodsGrid}>
//             {paymentMethods.map(method => (
//               <button
//                 key={method.id}
//                 type="button"
//                 className={`${styles.methodCard} ${selectedMethod === method.id ? styles.selected : ''}`}
//                 onClick={() => handlePayment()}
//               >
//                 <span className={styles.cardIcon}>{method.icon}</span>
//                 {method.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <button 
//           type="button" 
//           onClick={() => handlePayment()}
//           className={styles.submitButton}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <span className={styles.spinner}></span>
//           ) : (
//             `Оплатить ${amount} ₽`
//           )}
//         </button>

//         <div className={styles.securityNote}>
//           <span className={styles.lockIcon}>🔒</span>
//           Платежи защищены ЮКассой
//         </div>
//       </form>
//     </div>
//   );
// };

// PayForm.displayName = 'PayForm';