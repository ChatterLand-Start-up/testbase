import React, {useState,useEffect} from 'react'
import  "../Stylesheets/chat.css";
import {Avatar,IconButton} from "@material-ui/core"
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from "react-router-dom"
import firebasecf from "../Config/FirebaseConfig"
import {useStateValue} from "./StateProvider"
import firebase from "firebase"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {Link} from 'react-scroll'

function ChatMobile() {
    const db= firebasecf.firestore();
    const[value, setValue]= useState()
    const sendMessage =(e)=>{
        e.preventDefault();
        db.collection("rooms").doc(roomId).collection("messages").add(
                {
                    message:value,
                    name: user.displayName,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    icon:user.photoURL
                }
            );
        setValue("")
    }; 
    const {roomId} = useParams()
    const [roomName, setRoomName]= useState();
    const [messages, setMessages]=useState([]);
    const [{user}, dispatch]=useStateValue();

   

    useEffect(()=>{

        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot)=>{
                setRoomName(snapshot.data().name)
            });

            db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp','asc').onSnapshot(
                snapshot=>(
                    setMessages(snapshot.docs.map(
                        doc=>doc.data()
                    ))
                )
            )

        
            
        }

    }, [roomId])
    

    return (
        <div id="chatMobile" class="chatFrame rounded">
            <div class="container" >
                        
                    <div class="row chatHeader rounded-top border-bottom">
                        <div class="d-flex align-items-center col-7">
                            <Avatar/>
                            <div className="chatHeaderinfo">
                                    <h3 class="mb-0">{roomName}</h3>
                            </div>
                        </div>
                        
                        <div class="col my-auto headerInfoRight">
                            <div className="float-right">
                                <IconButton size="small"><SearchOutlined fontSize="small"/> </IconButton>
                                <IconButton size="small"><AttachFile fontSize="small"/> </IconButton>
                                <IconButton size="small"><MoreVert fontSize="small"/>   </IconButton>   
                            </div>
                        </div>    
                    </div>

                    <div className="container overflow-auto content">
                        {messages.map((message)=>(
                            <div className="row">
                            <div className="col-12">
                                <p class={message.name===user.displayName ? "float-right my-auto" :"float-left my-auto"} >
                                    <div class="d-flex align-items-center">
                                        <Avatar src={message.icon}/> 
                                        <div class="pl-1">
                                            <div className="chatName m-1">
                                                {message.name}
                                            </div>
                                            <span className={message.name===user.displayName ?"p-2 rounded-pill bg-primary":"p-2 rounded-pill bg-white"}>{message.message}</span>
                                            <div className="chatName m-1">
                                                {new Date(message.timestamp?.toDate()).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                        
                                </p>
                            </div>
                        </div>
                        ))}

                    </div>

                    
                    <div className="row footer d-flex align-items-center">
                        <IconButton className="col-1"><InsertEmoticon/></IconButton>
                        <form className="col-9 p-0">
                            <input value={value} 
                            onChange={(e)=>setValue(e.target.value)}
                            placeholder="Type a Message"
                            className="col"
                            type="text"/>

                            <button onClick={sendMessage} type="submit" class="float-right"></button>
                        </form>
                        <div className="col-1 p-0">
                            <IconButton><MicIcon/></IconButton>
                        </div>
                    </div>
                    
                    <div className="row Toproll">
                            <div className="col-12 d-flex justify-content-center">
                                <Link to="sidebar" smooth="true" duration="250">
                                    <IconButton size="small"><ArrowUpwardIcon/></IconButton>
                                </Link>
                                
                            </div>
                    </div>

            </div>
        </div>    
    )
}

export default ChatMobile
