import Headshot from '/headshot.jpg'
import ProjectCard from './ProjectCard'
export default function Hero(){
    return(
        <div className="hero h-[70vh] md:h-[80vh] items-start">
            <div className="hero-content flex-row items-center mt-10">
                  <img
                src={Headshot} 
                className="w-1/3 max-w-[300px] headshot-img"
                alt="Headshot of Parvathi in a black top and orange cardigan."
                />
                    <div className="md:w-1/2 text-left mx-3 ">
                        <h1 className="sm:text-lg">Parvathi Kumar</h1>
                        <p id="tagline" className="text-xs md:text-sm py-2">
                            Creating intuitive, scalable web experiences and turning complex ideas into elegant, user-friendly solutions. I thrive on bringing creative ideas to life through thoughtful code and collaboration. <br/> <br/>
                            Let's build something remarkable together.
                        </p>
                    </div>
            </div>
        </div>
    )
}