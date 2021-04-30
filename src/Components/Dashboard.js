import React from 'react'
import '../Stylesheets/Dashboard.css';
import Sidebar from "./Sidebar.js"
import div from "@material-ui/core/Grid";
import Logout from "./App.js"
import Chat from './Chat';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

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
                        <div class="row">
                            <Router>
                                <div class="col-12 col-md-3 p-1"><Sidebar/></div>
                                <Switch>
                                    <Route path="/rooms/:roomId">
                                        <div class="col-12 col-md-9 p-1"><Chat/></div>
                                    </Route>
                                    <Route path="/">
                                    </Route>
                                </Switch>
                            </Router>
                          
                        </div>
                    </div>    
                
            </div>    
        </div>
    )
}
