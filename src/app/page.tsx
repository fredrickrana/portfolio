// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Header from 'components/Header'
import Hero from 'components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-center'>
      <Hero />
      </section>

      {/* About */}

      {/* Projects */}

      {/* Skills */}

      {/* Contact Me */}

    </div>

  )
}
