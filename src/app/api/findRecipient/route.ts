// app/api/findRecipient/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {

    const { username } = await request.json();
  

    const response = await axios.post(
      `https://fragment.com/api?hash=${process.env.NEXT_FRAGMENT_HASH}`,
      {
        query: username,
        method: 'searchStarsRecipient'
      },
      {
        headers: {
          'Cookie': `stel_ssid=${process.env.NEXT_FRAGMENT_SSID}; stel_token=${process.env.NEXT_FRAGMENT_TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 10000
      }
    );

    // 4. Возвращаем успешный ответ
    return NextResponse.json(response.status);
    
  
}