import { useState } from 'react'
import Loading from './components/Loading'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className='relative bg-secondary'>
    {isLoading && <Loading setAsLoaded={() => setIsLoading(false)} className='absolute'/>}
    <div className="h-screen">
    <button onClick={()=> console.log('hello')} className='bg-blue-800 p-2'>hello</button>
    </div>
    </div>
  )
}
