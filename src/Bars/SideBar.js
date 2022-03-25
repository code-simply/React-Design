import React from "react";
// import ReactDOM from 'react-dom';
import { FolderIcon, GroupsIcon, SearchIcon, SettingIcon } from "../assests";
export const SidebarMain = () => (
    <header className='sidebar'>
        <div>
            <a href="#search"><div className='sidebar__item'>
                <SearchIcon />
                <p>Search</p>
            </div></a>
            <a href="#account"><div className='sidebar__item'>
                <GroupsIcon />
                <p>Account</p>
            </div></a>
            <a href="#folder"><div className='sidebar__item'>
                <FolderIcon />
                <p>Folder</p>
            </div></a>
        </div>
        <div>
            <a href="#setting"> <div className='sidebar__item settings'>
                <SettingIcon />
                <p>setting</p>
            </div></a>
        </div>
    </header>
);

