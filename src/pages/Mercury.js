import React from 'react';
import Navigation from '../components/Navigation';
import MercuryOverview from '../components/planets/mercury/MercuryOverview';

const Mercury = () => {
    return (
        <div className="container">
            <Navigation />
            <MercuryOverview />
        </div>
    );
};

export default Mercury;