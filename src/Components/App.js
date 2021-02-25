import Dashboard from "./Dashboard";
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../Stylesheets/Login.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebaseapp from '../Config/FirebaseConfig'
import firebase from 'firebase';

const auth = firebase.auth();

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
