import React, { useState } from 'react';
import './NavigationBar.css';
import search from '../../../assets/search.png';

export default function NavigationBar() {
    const navBar = ["Reputation", "New Users", "Voters", "Editors", "Moderators"];
    const [activeValue, setActiveValue] = useState('New Users');

    const handleClick = (value) => {
        setActiveValue(value);
    };
    return (
        <div className="nav-bar">
            <div className="search-container">
                {/* <i class="fa fa-search icon"></i> */}
                <img src={search} className='icon'></img>
                <input type="text" placeholder="Search users" className="search-holder" />
            </div>
            <div className="tabs">
                {navBar.map((value, index) => (
                    <a key={value + "_" + index} className={`tab ${activeValue === value ? 'active' : ''}`} onClick={() => handleClick(value)}>{value}</a>
                ))}
            </div>
        </div>
    )
}