import React from 'react';
import "../Stylesheets/Sidebar.css";
import {Avatar, IconButton} from "@material-ui/core"
import {DonutLarge, SearchOutlined} from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from "./SidebarChat.js"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_headerRight">
                    <IconButton><DonutLarge/> </IconButton>
                    <IconButton><ChatIcon/> </IconButton>
                    <IconButton><MoreVertIcon/>   </IconButton>                 
                </div>
            </div>

            <div className="sidebar_search">
                <div className='sidebar_searchContainer'>
                    <SearchOutlined/>
                    <input placeHolder="Serach or Start New Chat" type="text"/>
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                     
            </div> 
            
        </div>
    );
};



export default Sidebar;
