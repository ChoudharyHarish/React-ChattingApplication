import React,{useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from '@mui/material';
import img from "../profile.webp";
import { dummyUsers } from '../data';


const messageDetails = {
  lastMessage :'Sir have you checked my assignment?',
  noOfMessages:3,
  time:'10:00pm'
}


const SideBarCard = ({currReciever,setCurrReciever,recieverName,lastMessage,noOfMessages,time,number,username,index}) => {
    
    // fetch details of user from backend using id or username;

    const reciever = {
      name : recieverName,
      username : username,
      number:number
  }

  return (
        <div className={currReciever?.name === recieverName? 'flex active-user items-center gap-2 cursor-pointer p-2': 'flex items-center gap-2 cursor-pointer p-2'} onClick={(e) => setCurrReciever(reciever)}>
        <Avatar alt="Profile-Picture" src={img} />
            <div className='flex flex-col items-start'>
                <h1>{recieverName}</h1>
                <p>{lastMessage}</p>
            </div>
            <div className='flex flex-col justify-end items-center'>
            <span className='text-[10px]'>{time}</span>
            <span className='text-[10px] h-[15px] w-[15px] text-center' style={{borderRadius:'50%',backgroundColor:'#E1348B'}}>{noOfMessages}</span>
            </div>
        </div>
    )
}

const Sidebar = ({currReciever,setCurrReciever}) => {

  const [activeLink,setActiveLink] = useState('students');
  const [searchUser,setSearchUser] = useState('');
  const [users,setUsers] = useState(dummyUsers);


   const handleChange = (e) => {
            const val  = e.target.value;
            setSearchUser(val);
            const filteredUsers = dummyUsers.filter((user) => user.name.toLowerCase().startsWith(val.toLowerCase())); 
            if(val.length === 0) setUsers(dummyUsers);
            else setUsers(filteredUsers);           
    }

  return (
    <div className='flex flex-col p-6 rounded-[1rem] gap-6' style ={{backgroundColor: '#373A41',color:'white'}}>
     <div
        className="flex flex-row items-center justify-between px-8 mr-8 rounded-[10px]"
        style={{backgroundColor:' #505057'}}
      >
        <input
          className="p-2 rounded-lg outline-none"
          name="search"
          id=""
          placeholder='Search'
          value={searchUser}
          onChange={(e) => handleChange(e)}
          style={{backgroundColor:'#505057',color:'white'}}
          
        />
        <SearchIcon style = {{color:"white", marginLeft:'0.8rem'}}/>

      </div>

      <div className='sideBarContainer flex flex-col gap-4 relative'>

      <div className='px-8'>
      <ul className='flex gap-8'>
        <li><a href='/' className={activeLink === 'all'? 'active cursor-pointer' :'cursor-pointer'} onClick = {(e) =>{ e.preventDefault(); setActiveLink('all')}}>All</a></li>
        <li><a href='/' className={activeLink === 'students'? 'active cursor-pointer' :'cursor-pointer'} onClick = {(e) => { e.preventDefault(); setActiveLink('students')}}>Students</a></li>
        <li><a href='/' className={activeLink === 'groups'? 'active cursor-pointer' :'cursor-pointer'} onClick = {(e) =>{e.preventDefault(); setActiveLink('groups')}}> Groups</a></li>
      </ul>
      </div>

      <div className='flex flex-col'>
       {/* using map dynamically populate this */}
          {users.map((user,i) =>  <SideBarCard key = {user.name + i} index={i} {...messageDetails} {...user} recieverName={user.name}  currReciever={currReciever} setCurrReciever={setCurrReciever} /> )}   
      </div>
      </div>

    </div>
  )
}

export default Sidebar