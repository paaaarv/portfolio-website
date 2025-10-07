import sagaV from '../../public/sagaV.png'

export default function ProjectCard(){
    return(
        <div className="card card-sm py-1 mx-2 w-96 shadow-sm">
            <figure>
                <img
                src= {sagaV} 
                alt="SagaV Home Page"
                />
            </figure>
            <div className="project-card-info card-body">
                <h2 className="inline-flex card-title">Saga V</h2>
                <button className="btn btn-primary w-25">See More</button>
            </div>
        </div>
    )
}

