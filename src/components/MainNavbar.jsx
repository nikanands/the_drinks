import React from 'react'

import { NavLink } from 'react-router-dom'

class MainNavbar extends React.Component{

    render(){
        return(
            <div className='wrap_main_navbar'>
                <ul className='main_navbar'>
                    <li className='main_navlink'>
                        <NavLink to='/foodmenu' className='main_navitem'>
                            Foodmenu
                        </NavLink>
                    </li>
                    <li className='main_navlink'>
                        <a href='#new_drinks' className='main_navitem'>
                            New Collection
                        </a>
                    </li>
                    <li className='main_navlink nav_contacts'>
                        <a href='#contacts' className='main_navitem'>
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainNavbar;