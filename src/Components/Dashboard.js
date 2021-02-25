import React from 'react'
import '../Stylesheets/Dashboard.css';
import Sidebar from "./Sidebar.js"
import div from "@material-ui/core/Grid";
import Logout from "./App.js"
import ChatRoom from './ChatRoom';

export default function Dashboard() {
    return (
        <div className="app">
            <h1 className="header">ChatterLand</h1>
            <div container className="app_body">
                <div container className="side_body">
                    <Sidebar/>
                </div>
                <div container className="chatroom_body">
                    <ChatRoom/>
                </div>
            </div>
        </div>
    )
}
