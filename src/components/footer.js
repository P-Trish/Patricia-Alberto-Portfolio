import React from 'react';
import GitHub from '../assets/images/GitHub.png'
import LinkedIn from '../assets/images/LinkedIn.png'

export default function Footer() {
    return (
        <footer className="sticky-bottom text-center footer-icons" >


                <a href='https://github.com/P-Trish' target="_blank"> 
                < img src= {GitHub}></img>
                </a>

                <a href='https://www.linkedin.com/in/patricia-alberto-b8b88516/' target="_blank">  
                <img src= {LinkedIn}></img>
                </a>

            

        </footer>
    )
}