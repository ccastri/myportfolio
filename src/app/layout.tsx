import './globals.css'
import type { Metadata } from 'next'
// import { Railway } from 'next/font/google'
import { Raleway, Merriweather_Sans } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Camilo's Portfolio",
  description: 'Biomedical engineer and jr full stack dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-slate-900`}>{children}</body>
    </html>
  )
}
