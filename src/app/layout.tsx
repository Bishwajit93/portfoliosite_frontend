import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bishwajit Karmaker Portfolio',
  description: 'A unique, animated, eye-catching developer portfolio by Bishwajit Karmaker (Abdullah).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="background"></div>  {/* THIS IS CRITICAL */}
        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-8 py-4 mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
