import React from 'react';

function Hero( {personalInfo} ) {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <span className="hero-badge"> Welcome to my Web Page</span>
                <h1 className="hero-name">{personalInfo.name}</h1>
                <h2 className="hero-tagline">{personalInfo.tagline}</h2>
                <p className="hero-subtagline">{personalInfo.subTagline}</p>
                <p className="hero-location"><strong>Location:</strong> {personalInfo.location}</p>

                <div className="hero-contact-links">
                    <a href={`mailto:${personalInfo.email}`} className="hero-contact-item">
                        ✉️ {personalInfo.email}
                    </a>
                    <a href={`tel:${personalInfo.phone}`} className="hero-contact-item">
                        📞 {personalInfo.phone}
                    </a> 
                    {personalInfo.github && (
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-contact-item">
                             💻 GitHub
                        </a>
                    )}
                    {personalInfo.linkedin && (
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-contact-item">
                            💼 LinkedIn
                        </a>
                    )}
                </div>

                <div className="hero-cta-buttons">
                    <a href="#contact" className="btn-primary">
                        Get In Touch
                    </a>
                    <a href="projects" className="btn-secondary">
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;