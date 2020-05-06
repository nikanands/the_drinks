import React from 'react';

import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'

class Contacts extends React.Component{
    render(){
        return(
            <div className='container wrap_contacts' id='contacts'>
                <h1 className='contacts_header'>Contacts</h1>
                <div className='contacts'>
                    <div className="maps">
                        <img 
                            className='contacts_map'
                            src='https://cdn.filestackcontent.com/qfzkumr0RE27pdC8tqeH' 
                            alt='Map'/>
                    </div>
                    <div className='address'>
                        <div className='contacts_details'>
                            <FaMapMarkerAlt
                                className='contacts_details_map_icon' 
                            />
                            <span className='contacts_details_address'>Shop 39, Club Road, Punjabi Bagh, New Delhi</span>
                        </div>
                        <div className='contacts_details'>
                            <FaMobileAlt
                                className='contacts_details_mobile_icon' 
                            />
                            <span className='contacts_details_mobile'>
                                +918502784511
                            </span>
                        </div>
                        <div className='contacts_details'>
                            <FaEnvelope
                                className='contacts_details_mail_icon' 
                            />
                            <span className='contacts_details_mail'>
                                email@email.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;