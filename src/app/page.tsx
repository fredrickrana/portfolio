import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import Contact from 'components/Contact'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] overflow-x-hidden h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#62f8d5]">
      <Header />
      <section id='home'>
        <Hero />
      </section>

      <section id='about' className='mb-[215%] md:mb-[40%] lg:mb-[10%]'>
        <About />
      </section>

      <section id='skills' className='mb-[215%] md:mb-[40%] lg:mb-[10%]'>
        <Skills />
      </section>

      <section id='projects' className='mb-[315%] md:mb-[40%] lg:mb-[10%]'>
        <Projects />
      </section>

      <section id='contact' className='mt-[225%] mb-[150%] md:mb-[40%] md:mt-[130%] lg:mb-[10%]'>
        <Contact />
      </section>

      <div className='w-[100%] text-center mb-8 mt-[32%]'>
        <p className='text-[#ccd6f6]'>- Designed and Built by <span className='font-sfmono text-[#63f8d5] tracking-[.03em] hover:underline underline-offset-6'>Fredrick Rana</span> -</p>
      </div>
    </div>
  )
}
