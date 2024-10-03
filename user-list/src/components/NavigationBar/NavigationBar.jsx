import React, { useState } from 'react';
import './NavigationBar.css';

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
                <img src="https://www.flaticon.com/download/icon/3031293?icon_id=3031293&author=741&team=741&keyword=Search&pack=3031247&style=Basic+Outline&style_id=1215&format=png&color=%23000000&colored=1&size=512&selection=1&type=standard&search=search" className='icon'></img>
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