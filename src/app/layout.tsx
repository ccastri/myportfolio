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
    <html lang="en" className="m-0 p-0 overflow-x-hidden">
      <body className={`${raleway.className} m-0 p-0 pb-[60px] overflow-x-hidden text-slate-700 bg-[#fafafa
      ]`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
