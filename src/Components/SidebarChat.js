import { Avatar } from '@material-ui/core';
import React, {useEffect, useState}from 'react';
import "../Stylesheets/sidebarchat.css";
import 'firebase/firestore';
import firebase from 'firebase';
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll"
import firebasecf from "../Config/FirebaseConfig"

const firestore = firebase.firestore();
const db= firebasecf.firestore();

function SidebarChat({addNewChat, id, name}) {
    // Reference to a firestore collection



    const [seed, setSeed] = useState("");
    const [messages, setMessage]=useState([])
    const [lastMessage, setLastMessage]=useState([])
    const testing =[1,2,3,4];

    const retrieveMsg=(roomId)=>{
        db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp','desc').onSnapshot(
            snapshot=>(
                setMessage(snapshot.docs.map(
                    doc=>doc.data()
                ))
            )
        )



    }
    
    
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
        retrieveMsg(id)
    },[id]);



    const createChat= ()=>{
        const roomName= prompt("Please enter name for chat")

        if (roomName){
            firestore.collection("rooms").add(
                {
                    name:roomName,
                }
            );
        }
    };

    return !addNewChat? (

      
            <Scroll to="chatMobile" smooth="true" duration="500" >
                  <Link to={`/rooms/${id}`}  >
                    <div className="shortheight">
                        <div className="row p-2 sidebarChat">
                            <Avatar className="col-4"src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                            <div class="col-8">
                                <h5 className="blacktext">{name}</h5>   
                                <span className="d-flex blacktext">
                                    {messages[0]?.message}
                                </span>
                            </div>
                            
                        </div>
                    </div>  
                </Link>
            </Scroll>
       

    ): (
        <div onClick={createChat} className="sidebarChat">
            <p>Add new Chat</p>
        </div>
    )
}

export default SidebarChat ;