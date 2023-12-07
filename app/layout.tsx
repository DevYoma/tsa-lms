import type { Metadata } from 'next'
import { Dosis, Inter } from 'next/font/google'
import './globals.scss'

// const inter = Inter({ subsets: ['latin'] })
const dosis = Dosis({ 
    subsets: ['latin'], 
    variable: '--font-dosis' 
})

export const metadata: Metadata = {
  title: 'TSA LMS',
  description: 'Tech Space Academy LMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  )
}
