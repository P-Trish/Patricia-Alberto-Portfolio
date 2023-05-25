import React from 'react';
import PatriciaAlbertoResTech23 from '../assets/images/PatriciaAlbertoResTech23.pdf';
import Skills from '../assets/images/SKILLS.png';

export default function Resume() {
    return (
        <div className='height resumeInfo'>
            <p>
            <a href={PatriciaAlbertoResTech23} target = "_blank"> CLICK TO VIEW RESUME AS PDF </a>
            </p>
            <h2>SUMMARY</h2>
            <p>
                Highly skilled and experienced Full Stack Web Development bootcamp graduate with a robust background in Television and Virtual Reality Production. Expertise in project management and production coordination with proven ability to streamline processes, liaise with stakeholders, and ensure successful content capture. Skilled in collaborating with diverse teams, corresponding with clients, and ensuring timely execution of projects. Excellent organizational, communication, and problem-solving abilities with a strong attention to detail.
            </p>
            <h2>
                EDUCATION
            </h2>
            <ul>
                <li>
                    ❖ Full Stack Web Development Certificate, University of California, Los Angeles
                </li>
                <li>
                    ❖ Master of Arts in Communication Studies: Telecommunication & Film, California State University, Los Angeles
                </li>
                <li>
                    ❖ Bachelor of Arts in Communication and Socio-Cultural Linguistics, University of California, Santa Barbara
                </li>
            </ul>

            <h2>
                TECHNICAL SKILLS
            </h2>
            <p>
                HTML, CSS, Advanced CSS, JavaScript, Web APIs, Third-Party APIs, Server-Side APIs, Node.js, Object-Oriented Programming (OOP), Express.js, SQL, Object-Relational Mapping, Model-View-Controller (MVC), Computer Science for JavaScript, NoSQL, Progressive Web Applications (PWA), React, MERN stack development, State management
            </p>
            <img className='skillsIcons' src= {Skills} />
        </div>
    )
}