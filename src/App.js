import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//import Login from './components/login'
import Home from './home'
import Createpost from './createpost'
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
    
    <Home/>
    
    <Routes>
    <Route exact path="/createpost" element={<Createpost/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
