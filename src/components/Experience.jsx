import React from 'react';

function Experience ( {experienceList} ) {
    return (
        <section className = "experience-section">
            <h3>Experience</h3>
            <div className = "experience-grid">
                {experienceList.map((experience) => (
                    <div key={experience.experienceId} className = "experience-card">
                        <h4>{experience.title}</h4>
                        <p><strong>Company:</strong> {experience.company}</p>
                        <p><strong>Duration:</strong> {experience.startDate} - {experience.endDate}</p>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;