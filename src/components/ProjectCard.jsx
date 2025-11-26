import sagaV from '/sagaV.png'
import { fetchArticles } from '../api/blog'
import { useState, useEffect } from 'react';

export default function ProjectCard(){

   const [projects, setProjects] = useState([]);
   const [modalOpen, setModalOpen] = useState(false); 
   const [selectedProject, setSelectedProject] = useState(null); 
   
     useEffect(() => {
       fetchArticles().then(data => {
         setProjects(data || []);
       }).catch(console.error);
   
     }, []);

   
    return(
        <div>
            {(modalOpen && selectedProject) ? (  
                <div key={selectedProject.id} id={selectedProject.title} className="modal modal-open">
                    <div className="bg-[var(--cream)] modal-box py-10">
                    <div className="flex">
                        <div className="w-32 rounded">
                            <img src={selectedProject.cover_image}/>
                        </div>
                        <h3 className="font-bold text-md">{selectedProject.title}</h3>
                    </div>                        
                        <div id="modal-body">
                            
                            <div id="case-study-body">
                                <p className="py-4">{selectedProject.body_markdown} </p>
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={() => {
                            setModalOpen(false)
                            setSelectedProject(null)
                        }}>close</button>
                    </form>
                </div>
            ) : null }
            <div id="projects-div">
                {projects.map((project) => {
                    console.log(project);
                return (
                <div key={project.id} className="card card-sm py-1 mx-3 w-72 bg-[var(--cream)] shadow-xl">
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
                    <button className="w-25 self-end btn" onClick={() => {
                        setSelectedProject(project);
                        setModalOpen(true)
                        }}>
                        <img src="src/assets/arrow-circle-right.svg" /> 
                    </button>
                </div>
                );
                })}
            </div>
        </div>
    )
}

