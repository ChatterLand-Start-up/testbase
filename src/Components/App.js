import '../Stylesheets/App.css';
import Sidebar from "./Sidebar.js"
import div from "@material-ui/core/Grid";

function App() {
  return (
    <div className="app">
        <h1 className="header">ChatterLand</h1>
        <div container className="app_body">
            <Sidebar/>
            {/*chat*/}
        </div>
    </div>
  );
}

export default App;
