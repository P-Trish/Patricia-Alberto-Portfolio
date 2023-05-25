import React from 'react';
import {projects} from '../data/projects';

export default function Portfolio() {
    return (
        <div className='portfolio-info'>
           {projects.map((project) => (
            <div className = 'project-info'> 
        <img src = {project.image} />
        <h2>
            {project.name}
        </h2>
        <p>
            {project.description}
        </p>
        <p>
            {project.tech}
        </p>
        <a href={project.deployed} target = "_blank">
           Live Page 
        </a>
        <a href={project.repository} target = "_blank">
           Repo
        </a>


            </div> 
           )
           )}
        </div>
    )
}