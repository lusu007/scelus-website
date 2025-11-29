import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultLocale } from '@/i18n/config';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dienstplan - Polizei',
  description: 'Die moderne Lösung für Ihre Dienstplanung',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
