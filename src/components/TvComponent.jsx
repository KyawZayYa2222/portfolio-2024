import { useEffect, useState, useRef, useMemo } from 'react';
import tvFrame from '../assets/tv-frame.png';

export default function TvComponent() {
  const canvasRef = useRef(null);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const icons = ['html', 'css', 'sass', 'js', 'bootstrap', 'tailwind', 'vue', 'react', 'nodejs', 'php', 'laravel', 'mysql', 'pgsql', 'mongodb', 'redis', 'github', 'docker'];

  // create and load icon images
  const iconImages = useMemo(() => {
    const loadedIconImages = [];
    icons.map(icon => {
      const img = new Image();
      img.src = `/src/assets/${icon}.png`;
      loadedIconImages.push(img);  
    })
    return loadedIconImages;
  })

  // render current icon on canvas
  const render = (currentIconIndex) => {
    const canvas = canvasRef.current;
    // canvas.width = 160;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(iconImages[currentIconIndex], 0, 0, canvas.width, canvas.height);
    console.log(currentIconIndex);
  }

  const interval = setInterval(() => {
    setCurrentIconIndex((prevIndex) => (prevIndex+1) % iconImages.length);
  }, 1000);
  // clearInterval(interval)

  useEffect(() => {
    render(currentIconIndex);
  }, [currentIconIndex])


  return (
    <div className={`relative h-full w-44`}>
        <img src={tvFrame} className="z-20 absolute bottom-7" alt="" />
        <div className="z-0 absolute bottom-10 w-32 h-24 bg-white mt-6 ms-4"></div>
        {/* fetch icon images here  */}
        {/* {iconImages} */}
        <canvas ref={canvasRef} className='z-10 absolute bottom-16 left-11 w-14 h-14'></canvas>
    </div>
  )
}
