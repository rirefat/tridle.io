import React from 'react';
import './PortfolioCard.css';

const PortfolioCard = (props) => {
    const {project_title, category, release_date, project_preview}=props.singlePortfolio;
    return (
        <div className='portfolio-card'>
            <img src={project_preview} alt="Project Preview" />
            <p className='card-meta-data'>{category}</p>
            <h4>{project_title}</h4>
        </div>
    );
};

export default PortfolioCard;