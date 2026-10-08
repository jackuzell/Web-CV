import React from 'react';

function Education({ educationList = [] }) {
    return (
        <section id="education" className="education-section">
            <div className="section-header">
                <h3 className="section-title">Education and Academic Results</h3>
                <p className="section-subtitle">Academic qualifications and standout module performances</p>
            </div>
            
            <div className="education-grid">
                {educationList.map((edu) => (
                    <div key={edu.id} className="education-card">
                        <div className="education-card-header">
                            <div>
                                <h4 className="institution-name">{edu.institution}</h4>
                                <h5 className="degree-title">{edu.degree}</h5>
                            </div>
                            <div className="education-period-badge">
                                <span> {edu.period} </span>
                            </div>
                        </div>

                        <div className="education-status-bar">
                            <span className="status-pill">{edu.status}</span>
                            <span className="grade-pill">{edu.annualMark}</span>
                            {edu.creditsEarned && (
                                <span className="credits-pill">{edu.creditsEarned}</span>
                            )}
                        </div>

                        {edu.topModules && edu.topModules.length > 0 && (
                            <div className="top-modules-container">
                                <h6 className="modules-heading">Standout Modules & Grades:</h6>
                                <div className="modules-grid">
                                    {edu.topModules.map((module) => (
                                        <div key={module.code} className="module-card">
                                            <span className="module-code">{module.code}</span>
                                            <span className="module-name">{module.name}</span>
                                            <span className="module-grade">{module.grade}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;