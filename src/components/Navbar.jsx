import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-brand">
                    Jack Uzell
                </a>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#contact" className="nac-contact-btn">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
