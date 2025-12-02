import Headshot from '/headshot.jpg'
import ProjectCard from './ProjectCard'
export default function Hero(){
    return(
        <div className="hero h-[50vh] md:h-[80vh] items-center">
            <div className="hero-content flex-row items-center mt-10">
                  <img
                src={Headshot} 
                className="w-1/3 lg:w-1/5 headshot-img"
                />
                    <div className="md:w-1/2 text-left mx-2 ">
                        <h1>Parvathi Kumar</h1>
                        <p id="tagline" className="text-xs md:text-base py-2">
                            Creating intuitive, scalable web experiences and turning complex ideas into elegant, user-friendly solutions. I thrive on bringing creative ideas to life through thoughtful code and collaboration. <br/> <br/>
                            Let's build something remarkable together.
                        </p>
                    </div>
            </div>
        </div>
    )
}