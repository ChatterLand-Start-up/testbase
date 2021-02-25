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
      <div>
        {user? <Dashboard/> : <Login/>}
      </div>
  )
}

function Login() {
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
          <span class="col-6 border border-success d-flex justify-content-center">
            <div class="row m-2 d-flex justify-content-center">
              <h2 class="col-12 text-center">Welcome to Chatters' Land</h2>
              <p class="col-12 text-center">You can use Google to sign up</p>
              <button type="button" className="btn btn-success" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
          </span>  
        <div class="col"></div>
      </div>
    </div>
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
