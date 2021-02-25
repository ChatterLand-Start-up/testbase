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
                <div class="row ">
                    <div class="col-3">
                        <Avatar/>
                    </div>
                    <div class="col">
                        <div className="float-right">
                            <IconButton><DonutLarge/> </IconButton>
                            <IconButton><ChatIcon/> </IconButton>
                            <IconButton><MoreVertIcon/>   </IconButton>                 
                        </div>
                    </div>
                </div>
              
            </div>

            <div className="sidebar_search">
                <div className='sidebar_searchContainer'>
                    <SearchOutlined/>
                    <input placeholder="Serach or Start New Chat" type="text"/>
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
