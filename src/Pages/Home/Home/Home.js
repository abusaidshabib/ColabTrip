import React from 'react';
import Addreview from '../../AddReview/Addreview';
import Achivements from '../Achivements/Achivements';
import AllLocation from '../AllLocation/AllLocation';
import ClientReview from '../ClientReview/ClientReview';
import HeroSection from '../HeroSection/HeroSection';
import RunningTour from '../RunningTour/RunningTour';
import Type1Location from '../Type1Location/Type1Location';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AllLocation></AllLocation>
            <Type1Location></Type1Location>
            <RunningTour></RunningTour>
            <Achivements></Achivements>
            <ClientReview></ClientReview>
            <Addreview></Addreview>
        </div>
    );
};

export default Home;