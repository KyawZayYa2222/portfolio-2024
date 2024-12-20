import { stagger } from 'motion';
import loadingImg from '../assets/mr-bean-loading.webp';
import LoadingCounter from './LoadingCounter';
import { useAnimate } from 'motion/react';


export default function Loading({setAsLoaded}) {
  const [scope, animate] = useAnimate();

  // loading animation function 
  const loadingAnimation = async () => {
    await animate(
      "#loadingContent",
      { opacity: 0 },
      { duration: 1 },
    )
    
    await animate(
      "li",
        {y: [0, '-100%']},
        {
          delay: stagger(0.1),
          duration: 1,
          ease: 'easeInOut',
        },
    )

    await setAsLoaded()
  }

  return (
    <div className='absolute z-50 w-full h-screen'>
      <div ref={scope} className='relative w-full h-full overflow-hidden'>
          <div id='loadingContent' className="absolute z-50 flex flex-col justify-center items-center w-full h-full">
            <img src={loadingImg} alt="" width="240px"/>
            <div className='text-xl mt-2 text-white'>
              <LoadingCounter  afterCounting={loadingAnimation}/>
            </div>
          </div>

          <ul className='grid grid-flow-col'>
            {/* // return li for 6 with loop  */}
            {
              Array(6).fill(null).map((_, index) => (
                <li key={index}>
                  <div className="w-full h-screen bg-primary"></div>
                </li>
              ))
            }
          </ul>
      </div>
    </div>
  )
}
