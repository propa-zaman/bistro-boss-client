import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hook/useTitle'
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;