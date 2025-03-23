import type { Metadata } from "next";
import Header from '@/components/layout/header'
import "./globals.css";

export const metadata: Metadata = {
  title: "golden coffe",
  description: "golden coffe app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`overflow-x-hidden w-screen h-screen font-Dana-medium bg-gray-100 dark:bg-zinc-700`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
};
