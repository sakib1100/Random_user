import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Compunent/Navbar/Navbar';
import Home from './Compunent/Home/Home';
import User from './Compunent/User/User';
import Login from './Compunent/Login/Login';
import UserDetail from './Compunent/UserDetail/UserDetail';
import RequireAuth from './Compunent/RequireAuth/RequireAuth';


function App() {
  return (
    <div >
<Navbar />

<Routes>
  <Route path='/' element={<Home />} ></Route>
  <Route path='/home' element={<Home />} ></Route>
  <Route path='/user' element={<User />} ></Route>
  <Route path='userDetail/:userId' element={<RequireAuth>
    <UserDetail />
  </RequireAuth>}></Route>
  <Route path='/login' element={<Login />} ></Route>
</Routes>
    </div>
  );
}

export default App;
