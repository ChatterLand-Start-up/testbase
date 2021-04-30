import Dashboard from "./Dashboard";
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../Stylesheets/Login.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebaseapp from '../Config/FirebaseConfig'
import firebase from 'firebase';
import {useStateValue} from "./StateProvider"
import actionTypes from"./Reducer"
import Login from "./Login"



function App() {

  const [{user}, dispatch] = useStateValue();
  console.log({user});
  return (
      <div>
        {!user? <Login/>: <Dashboard/>}
      </div>
  )
}



export default App;
