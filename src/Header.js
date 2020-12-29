import React from "react";
import './header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessAlarm';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from './StateProvider';

function Header() {
    const [{user}]= useStateValue();
    
    return (
        <div className="header">
            <div className="header__left">
               <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL}/>
               <AccessTimeIcon></AccessTimeIcon>
               </div>
               <div className="header__search">
               <SearchIcon/>
               <input placeHolder="search"/>
               </div>
               <div className="header__right">
               <HelpOutlineIcon/>
               </div>
        </div>
    )
}

export default Header;
