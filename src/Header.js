import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react'


function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className = "header">
            <div className = "header__left">
                <Hamburger direction="right" size={20} />
                <Link to ="/">
                <img className = "header__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" 
                alt="YouTube Logo" />
                </Link>
            </div>

            <div className="header__input">
                <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header__inputButton"/>
                    </Link>
            </div>
            
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
                alt="Bogdan Stanescu"
                src="https://scontent.fclj2-1.fna.fbcdn.net/v/t1.0-9/106202351_3257348421023264_202038541735912792_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=HK30ioHNsNAAX9zctQi&_nc_ht=scontent.fclj2-1.fna&oh=6065bdc6774042aa893333b42c0d8456&oe=6029E663" />
            </div>
        
        </div>
    )
}

export default Header
