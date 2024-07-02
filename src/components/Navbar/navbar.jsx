import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/react.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export default function Navbar() {
    // Mobile menu state
    const[sidenav, setSidenav]=useState(false);
    // Desktop fixed menu
    const[sticky, setSticky]=useState(false);
    // Mobile icon
    const menuIcon = <FontAwesomeIcon icon={faBars} />
    const sidenavShow=()=>{
        setSidenav(!sidenav);
    }
    useEffect(()=>{
        const handleScroll=()=>{
            setSticky(window.scrollY>20)
        }
        window.addEventListener('scroll', handleScroll);
        return()=>{window.removeEventListener('scroll', handleScroll)}
    })
  return (
    <>
    <header id='side_header' className={`${sticky ? "sticky" : ''}`}>
        <div className="container">
            <nav className="navbar" id="Navbar">
                <div className="navbar_brand">
                    <a href="#"> 
                        <img src={logo} alt="logo" width="60px" height="50px" />
                    </a>
                </div>
                <div className="navbar_toggler" onClick={sidenavShow}>
                    {menuIcon}
                </div>
                <div className={`menu_items ${sidenav===true ? 'active' : ''}`}>
                    <ul style={{backgroundColor: "#171717"}}>
                        <li>
                            <a activeClass='active'  href='#home' spy={true} smooth={true} >Home</a>
                        </li>
                        <li>
                            <a href='#about' spy={true} smooth={true} >About us</a>
                        </li>
                        <li>
                            <a href='#services' spy={true} smooth={true} >Services</a>
                        </li>
                        <li>
                            <a href='#blog' spy={true} smooth={true} >Blog</a>
                        </li>
                        <li>
                            <a href='#contact' spy={true} smooth={true} >Contact us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    </>
  );
}
