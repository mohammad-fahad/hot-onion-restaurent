import React from 'react';
import FoodItems from '../FoodItems/FoodItems';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <FoodItems/>
            <Footer />
        </div>
    );
};

export default Home;