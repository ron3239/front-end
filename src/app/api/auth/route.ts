import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const authData = req.query;

  // 1. Проверяем обязательные поля
  if (!authData.id || !authData.hash) {
    return res.status(400).json({ error: 'Invalid auth data' });
  }

  // 2. Проверяем хэш авторизации
  const secretKey = crypto.createHash('sha256')
    .update(process.env.TELEGRAM_BOT_TOKEN!)
    .digest();
  
  const dataCheckString = Object.keys(authData)
    .filter(key => key !== 'hash')
    .sort()
    .map(key => `${key}=${authData[key]}`)
    .join('\n');

  const hash = crypto.createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  if (hash !== authData.hash) {
    return res.status(401).json({ error: 'Invalid hash' });
  }

  // 3. Проверяем время авторизации (не старше 1 дня)
  if (Date.now() / 1000 - Number(authData.auth_date) > 86400) {
    return res.status(401).json({ error: 'Auth data expired' });
  }

  // 4. Возвращаем данные пользователя
  res.setHeader('Set-Cookie', `tg_user=${JSON.stringify(authData)}; Path=/; HttpOnly`);
  res.redirect('/');
}