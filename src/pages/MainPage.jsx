import React from 'react';
import HomPageNav from '../components/Home/NavBar';
import Series from '../components/Home/Series/index';
import Footer from '../components/Home/Footer/index';
import Hero from '../components/Home/Hero/index';
import MoviePreview from '../components/Home/MoviePreview/index';
import Cartoons from '../components/Home/Cartoons';
import SpecialMovie from '../components/Home/SpecialMovie';
import Membership from '../components/Home/Membership';
import Contact from '../components/Home/Contact';
import BottomNav from '../components/Home/Footer/BottomNav';

const MainPage = () => {
    return (
        <div>
            <HomPageNav />
            <Hero />
            <MoviePreview />
            <Series />
            <Cartoons />
            <SpecialMovie />
            <Membership />
            <Contact />
            <BottomNav />
            <Footer />
        </div>
    );
};

export default MainPage;
