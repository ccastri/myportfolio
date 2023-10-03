import Image from 'next/image'
import Hero from './Hero'
import Stack from './_components/Stack'
import OtherSkills from './_components/OtherSkills'
import Slider from './_components/Slider'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
     <Hero/>
     <Stack/>
     <Slider/>
     <OtherSkills/>
    </main>
  )
}
