import React from 'react'
import './Footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
function Footer() {
    return (
        <div className='footer'>
            <div className='row'>
                <p className='social-title'>
                    Follow us for More
                </p>
            </div>
            <div className='foot-div'>
                <a href="https://instagram.com" rel="noreferrer">
                    <FaInstagram className='logo' />
                </a>
                <a href="https://youtube.com" rel="noreferrer">
                    <FaYoutube className='logo' />
                </a>
                <a href="https://facebook.com" rel="noreferrer">
                    <FaFacebookF className='logo' />
                </a>
                <a href="https://twitter.com" rel="noreferrer">
                    <FaTwitter className='logo' />
                </a>
                <a href="https://tiktok.com" rel="noreferrer">
                    <FaTiktok className='logo' />
                </a>
            </div>

            <div className='row'>
                <p className='copyright'>
                    &copy;{new Date().getFullYear()} ABYSS MEDIA | All rights Reseved | Terms of Service | Privacy
                </p>
            </div>
        </div>
    )
}

export default Footer