import React from 'react';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Guides from '../Guides/Guides';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            
            <Guides></Guides>
            
        </div>
    );
};

export default Home;