import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  const navigate=useNavigate()
  return (
    <div>
      <NavBar/>
    <div className="App">
        <h1>Welcome To Main Page</h1>
        <button onClick={()=>{navigate("/register")}}>Register</button>
        <button onClick={()=>{navigate("/login")}}>Login</button>
        <Link to="/register">register</Link>
        <Link to="/Login">Login</Link>
    </div>
    </div>
  );
}

export default App;
