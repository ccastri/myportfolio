import './globals.css'
import type { Metadata } from 'next'
import { Raleway, Merriweather_Sans } from "next/font/google";
import Header from './_components/Header'
import Footer from './_components/Footer';
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
      <body className={`${raleway.className} overflow-x-hidden bg-slate-900`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
