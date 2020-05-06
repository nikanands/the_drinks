import React from 'react';

import MainNavbar from './MainNavbar';

class MainHeader extends React.Component{
    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll = () => {
        const header = document.querySelector('.wrap_main_header')
        if(window.scrollY > 0) {
            header.classList.add('scrolled_main_header')
          } else if(window.scrollY === 0){
            header.classList.remove('scrolled_main_header')
            header.classList.add('wrap_main_header')
          }
    }

    render(){
        return(
            <div className='wrap_main_header'>
                <h1 className="title">The Drinks</h1>
                <MainNavbar />
            </div>
        )
    }
}

export default MainHeader;
