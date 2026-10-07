import React from 'react';

function Achievments( {achievementsList }) {
    return (
        <section id="achievements" className="achievements-section">
            <div className="section-header">
                <h3 className="section-title">Leadership and Achievements</h3>
                <p className="section-subtitle">Sports Leadership, national awards and professional recognition</p>
            </div>

            <div className="achievemnts-grid">
                {achievemntsList.map((item) => (
                    <div key={item.id} className="achievemnts-card">
                        <span className="achievements-category">{item.category}</span>
                        <h4 className="achievements-title">{item.title}</h4>
                        <p className="achievements-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Achievments;