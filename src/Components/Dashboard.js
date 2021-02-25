import React from 'react'
import '../Stylesheets/Dashboard.css';
import Sidebar from "./Sidebar.js"
import div from "@material-ui/core/Grid";
import Logout from "./App.js"
import ChatRoom from './ChatRoom';

export default function Dashboard() {
    return (
        <div>
            <div class="container app">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="header text-center">Chatters' Land</h1>
                    </div>    
                </div>
                
                    <div class="container">
                        <div class="row ">
                            <div class="col-3"><Sidebar/></div>
                            <div class="col-9"><ChatRoom/></div>
                        </div>
                    </div>    
                
            </div>    
        </div>
    )
}
