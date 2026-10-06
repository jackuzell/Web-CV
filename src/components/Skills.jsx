import React from 'react';

function Skills ( {skillsList} ) {
    return (
        <section className = "skills-section">
            <h3>Skills</h3>
            <div className = "skills-grid">
                {skillsList.map((skill) =>(
                    <span key = {skill} className = "skill-badge">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;