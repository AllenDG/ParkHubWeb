import './app.css'

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import Analytics from './components/pages/analytics/Analytics';
import Settings from './components/pages/settings/Settings';
import Transaction from './components/pages/transaction/Transaction';
import Profile from './components/pages/profile/Profile';


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

        <Route path="/transaction" element={<Transaction/>}/>

        <Route path="/profile" element={<Profile/>}/>

        <Route path='/settings' element={<Settings/>}/>
      </Routes>
      
    </div>
    </Router>
     
   
  );
}

export default App;
