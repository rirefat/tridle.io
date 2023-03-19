import React from 'react';
import usePortfolio from '../../hooks/usePortfolio';
import useTopProject from '../../hooks/useTopProject';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import TopProject from '../TopProject/TopProject';
import './Portfolio.css';

const Portfolio = () => {
    const [portfolio, setPortfolio]=usePortfolio();
    const [project, setProject]=useTopProject();

    return (
        <div  className='portfolio-section'>
            <h3>Works we are proud of</h3>
            <p>Good Creation Systems Ltd is a fully Digital solution providing company incorporated and registered under the corporate affair commission in July 20, 2022.</p>

            <div className="sample-container">
                <div className="left-container">
                    {
                        project.map(data=><TopProject key={data.id} data={data}></TopProject>)
                    }
                </div>
                <div className="right-container">
                    {
                        portfolio.map(singlePortfolio=><PortfolioCard 
                            key={singlePortfolio.id}
                            singlePortfolio={singlePortfolio}></PortfolioCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;