import { Avatar } from '@material-ui/core';
import React, {useEffect, useState}from 'react';
import "../Stylesheets/sidebarchat.css";
import firebaseapp from '../Config/FirebaseConfig'
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import firebase from 'firebase';


const firestore = firebase.firestore();

function SidebarChat() {
    // Reference to a firestore collection
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25);

    // Listen to data with a hook, so that it reacts to changes in real time
    const[messages] = useCollectionData(query, {idField: 'id'});

    const [seed, setSeed] = useState("");
    
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    return (
       <div class="window">
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
            </div>
        </div>
       </div>  
    );
}

export default SidebarChat ;