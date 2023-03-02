// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import Contact from 'components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4181ee]/80'>
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

    </div>

  )
}
