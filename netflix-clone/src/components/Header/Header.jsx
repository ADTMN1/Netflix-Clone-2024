import React from 'react';
import "./Header.css";
import netflixLogo from "../../assets/images/netflixLogo.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    return (
        <div className="container">
            <div className="header_container">
                <div className="header_left">
                    <ul>
                        <li><img src={netflixLogo} alt="Netflix logo" width="100" /></li>
                        <li>Netflix</li>
                        <li>Home</li>
                        <li>Tvshows</li>
                        <li>Movies</li>
                        <li>My list</li>
                        <li>Browse by language</li>
                    </ul>
                </div>
                <div className='header_right'>
                    <ul>
                        <li><SearchOutlinedIcon className='header_icon' /></li>
                        <li><NotificationsNoneIcon className='header_icon' /></li>
                        <li><AccountBoxIcon className='header_icon' /></li>
                        <li><ArrowDropDownIcon className='header_icon' /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
