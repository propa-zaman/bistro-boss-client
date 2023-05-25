import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hook/useTitle'
import Category from '../Category/Category';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;