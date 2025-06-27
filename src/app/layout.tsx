import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bishwajit Karmaker Portfolio",
  description: "Personal portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/workspace_background.png')" }}
        >
          <div className="min-h-screen bg-black/40">{children}</div>
        </div>
      </body>
    </html>
  );
}
