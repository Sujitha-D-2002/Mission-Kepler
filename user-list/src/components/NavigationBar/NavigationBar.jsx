import React, { useState } from 'react';
import './NavigationBar.css';
export default function NavigationBar() {
    const navBar=["Reputation","New Users","Voters","Editors","Moderators"];
    const [activeValue, setActiveValue] = useState('New Users');

    const handleClick = (value) => {
        setActiveValue(value); 
    };
    return (
        <>
            <div className="nav-bar">
                <div className="search-container">
                    <i class="fa fa-search icon"></i>
                    {/* <img src={search} class="fa fa-search icon"></img> */}
                    <input type="text" placeholder="Search users" className="search-holder" />
                </div>
                <div className="tabs">
                {navBar.map((value, index) => (
                    <a key={index} className={`tab ${activeValue === value ? 'active' : ''}`} onClick={() => handleClick(value)}>{value}</a>
                ))}
                </div>
            </div>

        </>
    )
}