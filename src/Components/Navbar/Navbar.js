import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from './Asset 1.png'
import logo2 from './Asset 2.png'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [color, setColor] = useState(false)




    const handleMenu = () => {
        setMenuOpen(p => !p)
    }


    const changeColor = () => {
        console.log(window.scrollY)
        window.scrollY >= 1300 ? setColor(true) : setColor(false)
    }


    useEffect(() => {
        window.addEventListener('scroll', changeColor)
    })




    //const changeLogo = () => {
    // window.scrollY >= 60 ? setLogo(logo) : setLogo(logo)
    //}




    return (
        <div className='header'>
            <div className={color ? 'content2' : 'content'}>
                <div className='logo-container'>
                    <img className='logo-image' src={color ? logo1 : logo2} alt='e'></img>
                    <NavLink  to="/" id={color ? 'logo2' : 'logo'} onClick={handleMenu}>
                        ABYSS MEDIA
                    </NavLink>
                </div>
                <nav className={`${'nav'} ${menuOpen ? 'isMenu' : ''}`}>
                    <ul className='nav-ul'>
                        <li className='nav-li'>

                            <NavLink  to="/" activeclassname="active" className={color ? 'nav-links' : 'nav-links2'} onClick={handleMenu}>
                                Home
                            </NavLink>
                        </li>

                        <li className='nav-li'>
                            <NavLink  to="/about" activeclassname="active" className={color ? 'nav-links' : 'nav-links2'} onClick={handleMenu}>
                                About Us
                            </NavLink>
                        </li>
                        <li className='nav-li'>
                            <NavLink  to="/Blog" activeclassname="active" className={color ? 'nav-links' : 'nav-links2'} onClick={handleMenu}>
                                Blog
                            </NavLink>
                        </li>
                        <li className='nav-li' id='cta-btn'>
                            <NavLink  to="/Contact" activeclassname="active" className={color ? 'nav-links' : 'nav-links2'} onClick={handleMenu}>
                                Lets Talk
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='toggle'>
                    {menuOpen ? <FaTimes onClick={handleMenu} /> : <FaBars onClick={handleMenu} />}
                </div>
            </div>
        </div>
    )
}


export default Navbar
