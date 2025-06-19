import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import crypto from 'crypto';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const authData = Object.fromEntries(searchParams.entries());

  // 1. Проверяем обязательные поля
  if (!authData.id || !authData.hash) {
    return NextResponse.json({ error: 'Invalid auth data' }, { status: 400 });
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
    return NextResponse.json({ error: 'Invalid hash' }, { status: 401 });
  }

  // 3. Проверяем время авторизации (не старше 1 дня)
  if (Date.now() / 1000 - Number(authData.auth_date) > 86400) {
    return NextResponse.json({ error: 'Auth data expired' }, { status: 401 });
  }

  // 4. Возвращаем данные пользователя
  const response = NextResponse.redirect(new URL('/', request.url));
  response.cookies.set('tg_user', JSON.stringify(authData), { path: '/', httpOnly: true });
  return response;
}