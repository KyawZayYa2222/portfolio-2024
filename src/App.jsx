import Loading from './components/Loading'
import HeroSection from './components/HeroSection';
import { useState } from 'react'
import ReactLenis from 'lenis/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading setAsLoaded={() => setIsLoading(false)} className='absolute'/>}

      <ReactLenis root>
        <main className='relative bg-secondary'>
          
          <HeroSection/>
          
          {/* <section className='w-full h-screen '>section2</section> */}
        </main>
      </ReactLenis>
    </>
  )
}
