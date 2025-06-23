import { FormEvent, useState } from 'react';
import axios from 'axios';

export default function PaymentForm() {
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState(100); // Минимум 100 руб = 50 звёзд
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post('/api/payment/create', {
        amount,
        username
      });
      
      setPaymentUrl(data.url);
      window.location.href = data.url; // Перенаправляем на оплату
    } catch (error:any) {
      alert(`Ошибка: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {paymentUrl ? (
        <div>
          <p>Перенаправляем на платёжную страницу...</p>
          <a href={paymentUrl} className="text-blue-500 underline">
            Нажмите, если не произошло автоматического перенаправления
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Telegram username (без @):
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              pattern="[a-zA-Z][a-zA-Z0-9_]{4,31}"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Сумма (мин. 100 руб):
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e:any) => setAmount(Math.max(100, e.target.value))}
              min="100"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Купить {Math.floor(amount / 2)} звёзд
          </button>
        </form>
      )}
    </div>
  );
}