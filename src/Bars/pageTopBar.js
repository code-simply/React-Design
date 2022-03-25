import React from "react";
import { Link } from "react-router-dom";
import { MoreIcon } from "../assests";


export const PageTopBar = () => (
    <header className='pagetopbar'>
        <div className="pagetopbar__main">
            <div className="pagetopbar__cointainer">
                <div className='topbar_user'>
                    <h6>Parthiban</h6>
                    <p>Dart | villivakam,chennai</p>
                </div>
            </div>
            <div className="pagetopbar__cointainer">
                <div className='pagenavbar__item active'><Link to="#market">Market Analysis</Link></div>
                <div className='pagenavbar__item'><Link to="#comp">Comp.Analysis</Link></div>
                <div className='pagenavbar__item'><Link to="#TG">TG Analysis</Link></div>
                <div className='pagenavbar__item'><Link to="#media">Media Plan</Link></div>
                <div className='pagenavbar__item'><MoreIcon /></div>
            </div>

        </div>
    </header>
);

