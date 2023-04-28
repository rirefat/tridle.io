import React, { useEffect, useState } from 'react';
import './Team.css';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TbBrandTwitter } from 'react-icons/tb';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, []);

    return (
        <div className='team-section'>
            <h3>Meet Our Team</h3>
            <p className='subtitle'>We are a small team of tech enthusiasts with relentless focus on creativity and attention to detail, we are committed to pushing the boundaries of what's possible in the digital world.</p>

            <div className="team-container">
                {
                    team.map((person, index) => (
                        <div key={index} className='team-member'>
                            <img src={person.img} alt="Team" />
                            <p className='person-name'>{person.name}</p>
                            <p className='person-designation'>{person.designation}</p>

                            <div className="social-links">
                                <Link to={person.socials.facebook}><RiFacebookCircleLine></RiFacebookCircleLine></Link>
                                <Link to={person.socials.twitter}><TbBrandTwitter></TbBrandTwitter></Link>
                                <Link to={person.socials.linkedin}><AiOutlineLinkedin></AiOutlineLinkedin></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Team;