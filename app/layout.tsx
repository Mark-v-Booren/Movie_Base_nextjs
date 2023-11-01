import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins ({
    weight:["600", "400"],
    subsets:["latin"]

})

export const metadata: Metadata = {
  title: 'Movie Database',
  description: 'Movie Database',
  keywords: ['movie', 'database']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
