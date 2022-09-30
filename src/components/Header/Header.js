import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css';
import { faBowlFood, faPlateWheat } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className='heading-style'>
            <FontAwesomeIcon icon={faPlateWheat} size="2x"></FontAwesomeIcon>
            <h2>HEALTHY EATING!</h2>
        </div>
    );
};
export default Header;