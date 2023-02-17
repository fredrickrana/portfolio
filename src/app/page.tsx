// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Header from 'components/Header'
import Hero from 'components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Header />

      {/* Hero */}
      <section id="hero">
      <Hero />
      </section>

      {/* About */}

      {/* Projects */}

      {/* Skills */}

      {/* Contact Me */}

    </div>

  )
}
