import React from 'react';

function Skills ( {skillsData} ) {
    return (
        <section id="skills" className="skills-section">
            <div className="section-header">
                <h3 className="section-title">Technical Skills and Competencies</h3>
                <p className="section-subtitle">Technologies, frameworks, systems administration and software practices</p>
            </div>

            <div className="skill-categories-grid">
                <div className="skill-category-card">
                    <h4 className="skill-category-title">Languages</h4>
                    <div className="skills-badge-wrap">
                        {skillsData.languages.map((languages, index) => (
                            <span key={index} className="skill-badeg">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-category-card">
                    <h4 className="skill-category-title">Frameworks and Libraries</h4>
                    <div className="skills-badge-wrap">
                        {skillsData.frameworks.map((skill) => (
                            <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-category-card">
                    <h4 className="skill-category-title">Systems Administration</h4>
                    <div className="skills-badge-wrap">
                        {skillsData.systems.map((skill) => (
                            <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skill-category-card">
                    <h4 className="skill-category-title">Engineering Practices and Tools</h4>
                    <div className="skills-badge-wrap">
                        {skillsData.engineeringPractices.map((skill) => (
                            <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;