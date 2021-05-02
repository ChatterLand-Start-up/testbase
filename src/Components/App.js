import Dashboard from "./Dashboard";
import 'firebase/auth';
import '../Stylesheets/Login.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useStateValue} from "./StateProvider"
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
