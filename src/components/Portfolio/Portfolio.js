import React from 'react';
import usePortfolio from '../../hooks/usePortfolio';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './Portfolio.css';

const Portfolio = () => {
    const [portfolio, setPortfolio]=usePortfolio();
    console.log(portfolio)

    return (
        <div  className='portfolio-section'>
            <h3>Works we are proud of</h3>
            <p>Good Creation Systems Ltd is a fully Digital solution providing company incorporated and registered under the corporate affair commission in July 20, 2022.</p>

            <div className="sample-container">
                <div className="left-container">
                    left
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