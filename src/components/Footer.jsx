import React from 'react';

function Footer({ personalInfo }) {
    return (
        <footer id="contact" className="portfolio-footer">
            <div className="footer-container">
                <div className="footer-cta">
                    <h3>Let's Connect</h3>
                    <p>Open to Graduate Software Engineering, Junior Systems / IT, and Full-Stack opportunities.</p>
                    <div className="footer-links">
                        <a href={`mailto:${personalInfo.email}`} className="footer-btn">
                        Email Me ({personalInfo.email})
                        </a>

                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-btn">
                        GitHub Profile
                        </a>

                        {personalInfo.linkedin && (
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-btn">
                            LinkedIn Profile
                        </a>
                        )}

                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React 19 & Vite.</p>
                        <a href="#hero" className="back-to-top">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
