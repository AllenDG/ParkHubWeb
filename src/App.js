import './app.css'

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import Analytics from './components/pages/analytics/Analytics';
import Login from './components/pages/auth/login/Login';
import Signup from './components/pages/auth/signup/Signup';


function App() {

  return (
    <Router>
       <Topbar />
      <div className="container">
        <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/users" element={<UserList />} />
        <Route path="user/:userId" element={<User/>} />
        <Route path="/newUser" element={<NewUser/>} />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      
    </div>
    </Router>
     
   
  );
}

export default App;
