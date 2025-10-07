import Headshot from '../../public/headshot.jpg'

export default function Hero(){
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row wrap">
                <div className="md:w-1/3">
                    <h1 className="text-5xl font-bold">Parvathi Kumar</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <img
                src={Headshot} 
                className="max-w-sm rounded-lg shadow-2xl"
                />
                 <div className=" mt-3 w-100 join join-vertical lg:join-horizontal">
                    <button className="btn join-item">Button</button>
                    <button className="btn join-item">Button</button>
                    <button className="btn join-item">Button</button>
                </div>
            </div>
        </div>
    )
}