import React from 'react';


import Carousel from './Home-Carousel';
import NewDrinks from './NewDrinks';
import Contacts from './Contacts';
import MainHeader from './MainHeader';
import Footer from './Footer';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MainHeader />
                <Carousel />
                <NewDrinks />
                <Contacts />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;