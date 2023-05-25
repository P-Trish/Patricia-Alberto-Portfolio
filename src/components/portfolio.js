import React from 'react';
import {projects} from '../data/projects';

export default function Portfolio() {
    return (
        <div className='height'>
           {projects.map((project) => (
            <div className = 'project-info'> 
        <img src = {project.image} />
        <p>
            {project.name}
        </p>
        <p>
            {project.description}
        </p>
        <p>
            {project.tech}
        </p>
        <a href={project.deployed}>
           Live Page 
        </a>
        <a href={project.repository}>
           Repo
        </a>


            </div> 
           )
           )}
        </div>
    )
}