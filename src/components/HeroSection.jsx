import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";


export default function HeroSection() {
  const emptyBox = useRef(null);
  const [boxMargin, setBoxMargin] = useState(0);
  const lineToBox = useRef(null);
  const [rect, setRect] = useState(0);
  const heroSection = useRef(null);
  const {innerWidth, innerHeight} = window;

  useEffect(() => {
    Splitting();
    setRect(lineToBox.current.getBoundingClientRect().top)
    console.log('inner width =>' + innerWidth)
    setBoxMargin(Math.ceil(((innerWidth - emptyBox.current.offsetWidth) / 2)-8))
  }, [lineToBox, innerWidth]);
  
  // get scroll y progress 
  const {scrollYProgress} = useScroll({
    target: heroSection,
    offset: ['start start', 'end center']
  });

  // smooth the progress 
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  // set transform data 
  const margin = useTransform(scrollYProgress, [0, 0.4], [boxMargin, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const boxHeight = useTransform(smoothProgress, [0.5, 0.8], [1,innerHeight])
  const boxOffset = useTransform(smoothProgress, [0.5, 0.8], [0,-rect]);

  useMotionValueEvent(margin, 'change', (latest) => {
    console.log(latest)
  })


  return (
    <div ref={heroSection}  className="w-full h-[3200px]">
        <div className="fixed top-0 right-0 w-full h-screen flex flex-col justify-between">
            <div className="text-[240px] max-w-[2048px] text-primary space-x-0 font-inter pt-24 px-40">
                <div className="leading-none">
                    <h1>Full Stack</h1>
                </div>
                <div data-splitting className="overflow-hidden leading-tight text-revel text-right">
                    Developer
                </div>
            </div>

            <div>
              <motion.div style={{opacity: textOpacity}} className="flex justify-between mb-6 px-40">
                  <p>Web Designing</p>
                  <p>Frontend Development</p>
                  <p>Backend Development</p>
              </motion.div>

              <div ref={emptyBox} className="relative mx-40 bg-none">
                {/* An empty box to get margin of lineToBox container div  */}
              </div>

              <motion.div style={{marginLeft: margin, marginRight:margin}} className="relative mx-40" >
                <motion.div ref={lineToBox} style={{y: boxOffset, height: boxHeight}} className="z-40 absolute w-full h-[2px] bg-primary"></motion.div>
              </motion.div>

              <motion.nav style={{opacity: textOpacity}} className="pb-12 pt-6 px-40">
                  <ul className="flex w-full justify-between font-inter text-xl">
                      <li>KYAW ZAYYA</li>
                      <li>
                          <a href="#github">Github</a>
                      </li>
                  </ul>
              </motion.nav>
            </div>
        </div>
    </div>
  )
}
