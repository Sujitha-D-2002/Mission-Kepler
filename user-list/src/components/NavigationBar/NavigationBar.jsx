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
                <img src="https://www.flaticon.com/download/icon/54481?icon_id=54481&author=42&team=42&keyword=Search+interface+symbol&pack=111182&style=Lineal&style_id=1182&format=png&color=%23000000&colored=1&size=512&selection=1&type=standard" className='icon'></img>
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