import Image from 'next/image'
import Hero from './Hero'
import Stack from './_components/Stack'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
     <Hero/>
     <Stack/>
    </main>
  )
}
