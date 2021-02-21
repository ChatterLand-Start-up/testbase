import React from 'react'
import '../Stylesheets/Dashboard.css';
import Sidebar from "./Sidebar.js"
import div from "@material-ui/core/Grid";

export default function Dashboard() {
    return (
        <div className="app">
            <h1 className="header">ChatterLand</h1>
            <div container className="app_body">
                <Sidebar/>
                {/*chat*/}
            </div>
        </div>
    )
}
