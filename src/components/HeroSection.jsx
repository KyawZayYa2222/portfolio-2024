// import TvComponent from "./TvComponent";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-between px-40">

        <div className="text-[240px] text-primary space-x-0 font-inter leading-none pt-24">
            <div className="flex items-end">
                <h1>Full Stac</h1>
                {/* <TvComponent/> */}
                <h1>k</h1>
            </div>
            <div className="text-right">
                Developer
            </div>
        </div>

        <div className="w-full">
            <div className="flex justify-between mb-6">
                <p>Web Designing</p>
                <p>Frontend Development</p>
                <p>Backend Development</p>
            </div>

            <nav className="pb-12 pt-6 border-t-2 border-primary ">
                <ul className="flex w-full justify-between font-inter text-xl">
                    <li>KYAW ZAYYA</li>
                    <li>
                        <a href="#github">Github</a>
                    </li>
                </ul>
            </nav>
        </div>

        
    </div>
  )
}
