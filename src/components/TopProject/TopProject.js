import React from 'react';
import './TopProject.css';

const TopProject = (props) => {
    const {project_title, category, release_date, project_preview, description}=props.data;
    return (
        <div className='top-project-card'>
            <img src={project_preview} alt="Project Preview" />
            <p className='meta-data'>{category}</p>
            <h4>{project_title}</h4>
            <p className="description">{description}</p>
        </div>
    );
};

export default TopProject;