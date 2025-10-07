import Headshot from '../../public/headshot.jpg'
import ProjectCard from './ProjectCard'
export default function Hero(){
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row flex-wrap">
                <div className="md:w-1/3">
                    <h1 className="text-5xl font-bold">Parvathi Kumar</h1>
                    <p className="py-3">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <img
                src={Headshot} 
                className="max-w-xs headshot-img shadow-2xl"
                />
                 <div className=" mt-3 join join-vertical lg:join-horizontal justify-center">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
        </div>
    )
}