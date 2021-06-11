import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav">
            <h1 className="nav__title">the planets</h1>
            <ul className="nav__list">
                <NavLink to="/mercury" className="nav__list-item">
                    <li className="nav__list-item">mercury</li>
                </NavLink>
                <NavLink to="/venus" className="nav__list-item">
                    <li className="nav__list-item">venus</li>
                </NavLink>
                <NavLink to="/earth" className="nav__list-item">
                    <li className="nav__list-item">earth</li>
                </NavLink>
                <NavLink to="/mars" className="nav__list-item">
                    <li className="nav__list-item">mars</li>
                </NavLink>
                <NavLink to="/jupiter" className="nav__list-item">
                    <li className="nav__list-item">jupiter</li>
                </NavLink>
                <NavLink to="/saturn" className="nav__list-item">
                    <li className="nav__list-item">saturn</li>
                </NavLink>
                <NavLink to="/uranus" className="nav__list-item">
                    <li className="nav__list-item">uranus</li>
                </NavLink>
                <NavLink to="/neptune" className="nav__list-item">
                    <li className="nav__list-item">neptune</li>
                </NavLink>
            </ul>
            <ul className="nav__line"></ul>
        </div>
    );
};

export default Navigation;