import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./(Home)/providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop by Misst",
  description: "Покупай звезды для телеграмма. Безопастно и удобно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Providers>

        <body className={`${inter.className} `}>{children}</body>
      </Providers>

    </html>
  );
}
