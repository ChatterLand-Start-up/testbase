import React, {useState,useEffect} from 'react';
import "../Stylesheets/Sidebar.css";
import {Avatar, IconButton} from "@material-ui/core"
import {DonutLarge, SearchOutlined} from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from "./SidebarChat.js"
import firebasecf from "../Config/FirebaseConfig"
import {useStateValue} from "./StateProvider"

const db= firebasecf.firestore();

function Sidebar() {
    
    const [rooms, setRooms]=useState([]);
    const[{user}, dispatch]=  useStateValue();
    
    useEffect(()=>{
        const unSubscribe=db.collection("rooms").onSnapshot((snapshot)=>(
            setRooms(snapshot.docs.map((doc)=>
                ({
                    id: doc.id,
                    data: doc.data(),
                })
                    
                
            ))
        )

        )

    return()=>{
        unSubscribe();
    };

    }, []) 


    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div class="row ">
                    <div class="col-3">
                        <Avatar src={user?.photoURL}/>
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
                <SidebarChat   addNewChat/>
                {rooms.map((room)=>(
                    
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                   
                 ))}
            </div> 
            
        </div>
    );
};



export default Sidebar;
