import React, { useState } from 'react';
import planetMercury from './planet-mercury.svg';
import source from '../icon-source.svg';
import { data } from '../data/data';
import { NavLink } from 'react-router-dom';

const MercuryOverview = () => {

    const [currentData] = useState(data);

    return (
        <div className="overview overwiew-mercury">
            <div className="information">
                <div className="information__img">
                    <img src={planetMercury} />
                </div>
                <div className="information__text">
                    <h1>{currentData[0].name}</h1>
                    <p>{currentData[0].overview.content}</p>
                    <span className="information__text-link">Source :
                        <a href={currentData[0].overview.source}>Wikipedia</a>
                        <img src={source} />
                    </span>
                    <ul className="information__nav">
                        <NavLink to="/mercury">
                            <li><span>01</span> overview</li>
                        </NavLink>
                        
                        <li><span>02</span> internal structure</li>
                        <li><span>03</span> surface geology</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MercuryOverview;