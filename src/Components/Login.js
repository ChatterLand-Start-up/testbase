
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../Stylesheets/Login.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebaseapp from '../Config/FirebaseConfig'
import firebase from 'firebase';
import {useStateValue} from "./StateProvider"
import {actionTypes} from"./Reducer"
import {useState, useEffect} from "react"

const auth = firebase.auth();

function Login() {
    const [seed, setSeed] = useState("");
    const [{}, dispatch] = useStateValue();
  
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result)=>{dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        
      })
    }
  
    useEffect(()=>{
      setSeed(Math.floor(Math.random()*5000));
    },[])

    return (
      <div class="container align-items-center">
        <div class="row vh-100 justify-content-center">
            <span class="my-auto col-12 col-md-6 rounded border border-success d-flex justify-content-center">
              <div class="row m-1 d-flex justify-content-center">
                <img class="showImg"src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></img>
                <h2 class="col-12 text-center">Welcome to Chatters' Land</h2>
                <p class="col-12 text-center">You can use Google to sign up</p>
                <button type="button" className="btn btn-success" onClick={signInWithGoogle}>Sign in with Google</button>
              </div>
            </span>  
        </div>
      </div>
    )
  }

  export default Login