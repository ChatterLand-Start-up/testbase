import { Avatar } from '@material-ui/core';
import React, {useEffect, useState}from 'react';
import "../Stylesheets/sidebarchat.css";
import firebaseapp from '../Config/FirebaseConfig'
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import firebase from 'firebase';
import {Link} from "react-router-dom";
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

        <Link to={`/rooms/${id}`}>
            <div className="shortheight">
                <div className="row p-2 sidebarChat">
                    <Avatar className="col-4 p-0"src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                    <h4 className="col-8">{name}</h4>   
                    <span className="col-12 d-flex">
                        {messages[0]?.message}
                    </span>
                </div>
      
             </div>  
        </Link>

    ): (
        <div onClick={createChat} className="sidebarChat">
            <p>Add new Chat</p>
        </div>
    )
}

export default SidebarChat ;