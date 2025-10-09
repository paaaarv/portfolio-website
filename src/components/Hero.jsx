import Headshot from '/headshot.jpg'
import ProjectCard from './ProjectCard'
export default function Hero(){
    return(
        <div className="hero min-h-screen">
            <div className="hero-content content-center items-start flex-col md:flex-row">
                    <div className="md:w-1/2 text-left">
                        <h1 className="text-5xl font-bold">Parvathi Kumar</h1>
                        <p className="py-3">
                            Creating intuitive, scalable web experiences and turning complex ideas into elegant, user-friendly solutions. I thrive on bringing creative ideas to life through thoughtful code and collaboration. <br/> <br/>
                            Let's build something remarkable together.
                        </p>
                         <ProjectCard/> 
                    </div>
                <img
                src={Headshot} 
                className="max-w-xs headshot-img shadow-2xl"
                />
            </div>
        </div>
    )
}