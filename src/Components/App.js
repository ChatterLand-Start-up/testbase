import Dashboard from "./Dashboard";
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';
import '../Stylesheets/Login.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp({
  apiKey: "AIzaSyBNmIFAS0gik3qmliWp_zYNWgQupe6EI_w",
  authDomain: "chatter-s-land.firebaseapp.com",
  projectId: "chatter-s-land",
  storageBucket: "chatter-s-land.appspot.com",
  messagingSenderId: "199851842950",
  appId: "1:199851842950:web:e3270884ac71be7bb3e007",
  measurementId: "G-7F0CPQFGPV"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <div className="center">
        {user? <Dashboard/> : <Login/>}
      </div> 
    </div>
  )
}

function Login() {
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
  }

  return (
      <button type="button" className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function Logout() {
  return auth.currentUser && (
      <button onClick={
          () => auth.signOut()
      }>
          Sign Out
      </button>
  )
}

export default App;
