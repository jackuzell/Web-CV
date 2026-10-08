import React from 'react';

function Projects({ projectList }) {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h3 className="section-title">Featured Projects</h3>
                <p className="section-subtitle">Short projects showcase my skills and experience.</p>
            </div>

            <div className="projects-grid">
                {projectList.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-card-header">
                            <h4 className="project-title">{project.title}</h4>
                            {project.subtitle && <span className="project.subtitle">{project.subtitle}</span>}
                        </div>

                        <p className="project-description">{project.description}</p>

                        {project.highlights && (
                            <ul className="project-highlights">
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                        )}

                        <div className="tech-stack">
                            {project.techStack.map((tech,idx) => (
                                <span key={idx} className="tech-badge">{tech}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                    GitHub Repo
                                </a>
                            )}
                            {project.liveLink && project.liveLink.startsWith('http') && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn live">
                                    Live Demo ↗
                            </a>
                            )}
                            {project.liveLink && !project.liveLink.startsWith('http') && (
                            <span className="project-status-pill">{project.liveLink}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;