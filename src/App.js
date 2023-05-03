import React,{useEffect, useState} from 'react';
import Navbar from './Componenets/Navbar';
import Sidebar from './Componenets/Sidebar';
import Chat from './Componenets/Chat';
import User from './Componenets/User';
import Grid from '@mui/material/Grid';
import { dummyUsers } from './data';


function App() {

  const [currReciever,setCurrReciever] = useState(dummyUsers[0]);

  const [showUser,setShowUser] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <div className='p-4 justify-between container-main' style={{height:"calc(100vh - 76px)"}}>
      <Sidebar currReciever = {currReciever}  setCurrReciever = {setCurrReciever}/>
      <Chat setCurrReciever = {setCurrReciever} {...currReciever}  setShowUser = {setShowUser}  status = 'online' />
       {showUser &&  <User {...currReciever} setShowUser={setShowUser}  /> }
      </div>
    </div>
  );
}
  

export default App;