import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className='footer_outer_container'>
            <div className='footer_inner_container'>
                <div className='footer_icon'>

                    <FacebookIcon />
                    <InstagramIcon />
                    <YouTubeIcon />

                </div>

                <div className='footer_data'>
                    <div>
                        <ul>
                            <li>Audio Description</li>
                            <li>Investor Relation</li>
                            <li>Legal Notice</li>
                        </ul>
                    </div>

                    <div className='Second-row'>

                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>cookei Preference</li>
                        </ul>
                    </div>
                    <div className='Third-row'>
                        <ul>
                            <li>Gift Cards</li>
                            <li>Terms of Use</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div className='Fourth-row'>
                        <ul>
                            <li>Media Center</li>
                            <li>Privace</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='service_code'>
                    <p>Service Code</p>
                </div>
                <div className='copyright-icon'>
                    <p>&copy;1997-2024 Netflix.INC</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;

