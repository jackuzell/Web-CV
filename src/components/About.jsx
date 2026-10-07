import React from 'react';

function About( {personalInfo }) {
    return (
        <section id="about" className="about-section">
            <div className="section-header">
                <h3 className="section-title">About Me</h3>
                <p className="section-subtitle">Background, core focus and engineering mindset</p>
            </div>
            <div className="about-content">
                <p className="about-text"> {personalInfo.summary}</p>
                <div className="about-highlights-grid">
                    <div className="about-highlights-card">
                        <span className="highlight-number">77.4%</span>
                        <span className="highlight-label">3rd Year CS Annual Mark (1st Class)</span>
                    </div>
                    <div className="about-highlight-card">
                        <span className="highlight-number">95%</span>
                        <span className="highlight-label">Software Design Module Mark</span>
                    </div>
                    <div className="about-highlight-card">
                        <span className="highlight-number">600+</span>
                        <span className="highlight-label">User Tickets Closed at Workhuman</span>
                    </div>
                    <div className="about-highlight-card">
                        <span className="highlight-number">35+</span>
                        <span className="highlight-label">Peer Recognition Awards</span>
                    </div>
                </div>
            </div> 
        </section>
    );
}

export default About; 