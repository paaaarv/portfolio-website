
import { fetchArticles } from '../api/blog'
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
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
                <dialog key={selectedProject.id} id={selectedProject.title} className="modal modal-open">
                    <div className="bg-[var(--teal)] modal-box py-10 max-w-[50%]">
                    <div className="flex py-3 items-center">
                        <div className="avatar"> 
                            <img className="w-25 rounded" src={selectedProject.cover_image} alt={selectedProject.title} /> 
                        </div>
                        <h3 className="font-bold text-xl mx-auto">{selectedProject.title}</h3>
                    </div>                        
                        <div id="modal-body">
                            <ReactMarkdown>{selectedProject.body}</ReactMarkdown>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={() => {
                            setModalOpen(false)
                            setSelectedProject(null)
                        }}>close</button>
                    </form>
                </dialog>
            ) : null }
            <div className="h-[70vh] items-center" id="projects-div">
                {projects.map((project) => {
                    console.log(project);
                return (
                <div key={project.id} className="card card-sm py-1 mx-3 w-72 h-100 bg-[var(--cream)] shadow-xl">
                    <figure class="avatar">
                        <img
                        className="h-full w-auto"
                        src={project.cover_image} 
                        alt={project.title}
                        />
                    </figure>
                    <div className="project-card-info card-body">
                        <h3 className="text-left inline-flex card-title">{project.title} </h3>    
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

