import React from 'react';

function Projects({ projectList }) {
    return (
        <section className = "projects-section">
            <h3>Projects</h3>
            <div className = "projects-grid">
                {projectList.map((project) => (
                    <div key={project.id} className = "project-card">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className = "tech-stack">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className = "tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;