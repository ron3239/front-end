// app/api/fragment/user/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST() {
  const requestData = {
    username: "ron3239", // Произвольный username
    fragment_cookies: "stel_token=ddd8ac3355a99691b580d1deb5cf7329ddd8ac29ddd8aaed71deac4dc85b2eab8d4b4; stel_ssid=cca627d69f6f00ea31_13296711434275751599; stel_ton_token=4_waS2JXHOrjD2ncHNYdolvPJLmOvYagGyh3krfVUi8tRMExgUZYUeH8ba1hoKK0ULYJ7ZMILXaBBcaQO49_Jybd40gDq20igmT4PzX8fxhn1b5gcNfPxAvUXEEUJT_qmmX63C_Oo27wAPdaBasy7vNbQgFl_MReIhG3UfqJdO3sQunjxjELMeFERe2l3FFc_Y5pZgbJ"
  };

  try {
    const response = await axios.post(
      'https://fragment-api.net/getUserInfo',
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}