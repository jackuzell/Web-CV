import React from 'react';

function Experience ( {experienceList} ) {
    return (
        <section id="experience" className="experience-section">
            <div className="section-header">
                <h3 className="section-title">Work Experience</h3>
                <p className="section-subtitle">Proffesional engineering placemnet, retail leadership and operations</p>
            </div>

            <div className="experience-timeline">
                {experienceList.map((exp) => (
                    <div key={exp.id} className="experience-card">
                        <div className="experience-card-header">
                            <div className="experience-title-group">
                                <h4 className="experience-title">{exp.title}</h4>
                                <h5 className="experience-compnay">
                                    {exp.company} - <span className="experience-location">{exp.location}</span>
                                </h5>
                            </div>
                            <div className="experience-meta">
                                <span className="experience-period">{exp.period}</span>
                                <span className="experience-type-tag">{exp.placementType}</span>
                            </div>
                        </div>

                        <ul className="experience-highlights">
                            {exp.highlights.map((highlight, index) => (
                                <li key={index} className="experience-highlight-item">
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;