import { useState } from 'react'
import Loading from './components/Loading'
import HeroSection from './components/HeroSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className='relative bg-secondary'>
      {isLoading && <Loading setAsLoaded={() => setIsLoading(false)} className='absolute'/>}
      
      <HeroSection/>
    </div>
  )
}
