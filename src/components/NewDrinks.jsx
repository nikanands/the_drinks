import React from 'react';

class NewDrinks extends React.Component{
    render(){
        return(
            <div className='container wrap_newdrinks' id='new_drinks'>
                <h1 className='newdrinks_title'>New Collection</h1>
                <div className='newdrinks_cards'>
                <div className='newdrinks_card card_one'>
                    <img 
                        className='img' 
                        alt='img' 
                        src='https://randomuser.me/api/portraits/men/18.jpg'
                    />
                    <div className='newdrinks_card_details'>
                        <h3 className='newdrinks_card_details_title'>Mocha</h3>
                        <span className='newdrinks_card_details_description'>Taste our new special Mocha</span>
                    </div>
                </div>
                <div className='newdrinks_card card_two'>
                    <img 
                        className='img' 
                        alt='img' 
                        src='https://randomuser.me/api/portraits/men/18.jpg'
                    />
                    <div className='newdrinks_card_details'>
                        <h3 className='newdrinks_card_details_title'>Mocha</h3>
                        <span className='newdrinks_card_details_description'>Taste our new special Mocha</span>
                    </div>
                </div>
                <div className='newdrinks_card card_one'>
                    <img 
                        className='img' 
                        alt='img' 
                        src='https://randomuser.me/api/portraits/men/18.jpg'
                    />
                    <div className='newdrinks_card_details'>
                        <h3 className='newdrinks_card_details_title'>Mocha</h3>
                        <span className='newdrinks_card_details_description'>Taste our new special Mocha</span>
                    </div>
                </div>
                <div className='newdrinks_card card_two'>
                    <img 
                        className='img' 
                        alt='img' 
                        src='https://randomuser.me/api/portraits/men/18.jpg'
                    />
                    <div className='newdrinks_card_details'>
                        <h3 className='newdrinks_card_details_title'>Mocha</h3>
                        <span className='newdrinks_card_details_description'>Taste our new special Mocha</span>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default NewDrinks;