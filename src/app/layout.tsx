import type { Metadata } from "next";
import { Geist, Geist_Mono, Sarabun } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Workshop: Claude Code - AI Coding Assistant ที่ทรงพลัง | SaijaiAI",
  description: "เรียนรู้การใช้ Claude Code ผู้ช่วยเขียนโค้ด AI ที่ทรงพลัง ใน Workshop หนึ่งวันเต็ม พัฒนาทักษะการเขียนโค้ดสมัยใหม่กับ Kamol Treewatchararat",
  keywords: "Claude Code, AI Coding Assistant, Workshop, Thailand, Bangkok, Machine Learning, Software Development",
  openGraph: {
    title: "Workshop: Claude Code - AI Coding Assistant ที่ทรงพลัง",
    description: "เรียนรู้การใช้ Claude Code ผู้ช่วยเขียนโค้ด AI ที่ทรงพลัง",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sarabun.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
