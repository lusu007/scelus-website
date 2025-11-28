import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultLocale } from '@/i18n/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dienstplan App',
  description: 'Die moderne Lösung für Ihre Dienstplanung',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

