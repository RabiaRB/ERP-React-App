import React from 'react'
    import './Header.css'
    import {logoHorizontal, search, bell, lock} from '../../assets'
    
    const Header = () => {
    return (
    <header>
        <img src={logoHorizontal} className="header-logo" alt="" />
        <ul>
            <li>
                <div className='search-bar'>
                    <input type="text" placeholder='Search' id='search-input-box'></input>
                    <a href="">
                        <img src={search} alt="" />
                    </a>
                </div>
            </li>
            <li>
                <a href="#">
                    <div className='icon-border'>
                        <img src={bell} className="icon" alt="" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div className='icon-border'>
                        <img src={lock} className="icon" alt="" />
                    </div>
                </a>
            </li>
            <li>
                <button className='primary-button'><a href="/settings">Settings</a></button>
            </li>
    
    
        </ul>
    
    </header>
    )
    }
    
    export default Header
