import React from 'react'

import { NavLink } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

class SecondaryNavbar extends React.Component{
    componentDidMount = () => {
        console.log(this.props  )
    }

    render(){
        return(
            <div className='wrap_navbar'>
                <ul className='navbar'>
                    <li className='navlink'>
                        <NavLink to='/cocktail' className='navitem'>
                            Cocktail
                        </NavLink>
                    </li>
                    <li className='navlink'>
                        <a href='#mocktail' className='navitem'>
                            Mocktail
                        </a>
                    </li>
                    <li className='navlink'>
                        <NavLink to='/tea' className='navitem'>
                            Tea
                        </NavLink>
                    </li>
                    <li className='navlink'>
                        <NavLink to='/coffee' className='navitem'>
                            Coffee
                        </NavLink>
                    </li>
                    <li className='navlink'>
                        <NavLink to='/shakes' className='navitem'>
                            Shakes
                        </NavLink>
                    </li>
                    <li className='navlink'>
                        <FaSearch 
                            className='nav_search navitem'
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default SecondaryNavbar;