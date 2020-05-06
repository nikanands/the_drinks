import React from 'react';

import {NavLink} from 'react-router-dom'
import SecondaryNavbar from './SecondaryNavbar';

class SecondaryHeader extends React.Component{

    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll)
    }

    onScroll = () => {
        const header = document.querySelector('.wrap_secondary_header')
        if(window.scrollY > 0) {
            header.classList.add('scrolled_secondary_header')
          } else if(window.scrollY === 0){
            header.classList.add('wrap_secondary_header')
            header.classList.remove('scrolled_secondary_header')
          }
    }

    render(){
        return(
            <div className='wrap_secondary_header'>
                <NavLink to= '/' className="secondary_header_title">The Drinks</NavLink>
                <SecondaryNavbar />
            </div>
        )
    }
}

export default SecondaryHeader;
