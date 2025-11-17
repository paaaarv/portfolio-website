import sagaV from '/sagaV.png'
import { fetchBooks } from '../api/hardcover'

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
                <a aria-label="Click to read more about SagaV"> href="https://dev.to/paaaarv/envisioning-sagav-a-tarot-themed-mocktail-brand-1dkp" target="_blank"<button className="btn btn-primary w-25">See More</button></a>
            </div>
        </div>
    )
}

