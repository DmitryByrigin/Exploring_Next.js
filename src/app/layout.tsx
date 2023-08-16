import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Знакомство с Next.js',
  description: 'Учусь создавать приложения на Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' mx-auto container text-center'}>
        <h3 className="my-5 text-xl">
          <b>
            Урок 1. Навигация. Меню и подменю, динамические страницы,серверные и клиенские
            компоненты, прелоадер, обработка ошибок
          </b>
        </h3>
        <Header />
        <main className="my-5 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
