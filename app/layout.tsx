import type { Metadata } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CTR Thumbnail Designer Portfolio',
  description: 'Interactive portfolio for a professional YouTube thumbnail designer focused on CTR growth.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} bg-darkBase text-white antialiased`}>{children}</body>
    </html>
  )
}
