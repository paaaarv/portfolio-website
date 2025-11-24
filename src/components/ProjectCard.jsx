import sagaV from '/sagaV.png'
import { fetchArticles } from '../api/blog'
import { useState, useEffect } from 'react';

export default function ProjectCard(){

   const [projects, setProjects] = useState([]);
   
     useEffect(() => {
       fetchArticles().then(data => {
         setProjects(data || []);
       }).catch(console.error);
   
     }, []);

     const createProjectModal = (e) => {
        console.log(e); 
        return(
             `<div id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click outside to close</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </div>`
        )
     }
   
    return(
        <div>
            {projects.map((project) => {
            return (
            <div className="card card-sm py-1 mx-3 w-64 shadow-sm">
                <figure>
                    <img
                    className="h-full w-auto"
                    src={project.cover_image} 
                    alt={project.title}
                    />
                </figure>
                <div className="project-card-info card-body">
                    <h4 className="inline-flex card-title">{project.title} </h4>    
                </div>
                <button className="w-25 self-end btn" onClick={(e) => createProjectModal(e)}>
                    <img src="../assets/arrow-circle-right.svg"/> 
                </button>
            </div>
            );
        })}
      </div>
    )
}

