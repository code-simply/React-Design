import React from "react";
import { Link } from "react-router-dom";
import { QuestionIcon, NotifyIcon } from "../assests";

export const TopbarMain = () => (
    <header className='navbar'>
        <div className='logo'></div>
        <div className="topbar__main">
            <div className="topbar__cointainer">
                <div className='navbar__item active' ><Link to="/">Predection</Link></div>
                <div className='navbar__item'><Link to="/">Performance</Link></div>
                <div className='navbar__item'><Link to="/">Engagement</Link></div>
            </div>
            <div className="topbar__cointainer">
                <a href="#notification"><div className='icon__item'><NotifyIcon /> </div></a>
                <a href="#Message"><div className='icon__item'><QuestionIcon /></div></a>
            </div>
        </div>
    </header >
);

