import React,{useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import img from "../profile.webp";
import img2 from "../Img2.png";
import { Avatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { InfoOutlined } from '@mui/icons-material';
import Switch from '@mui/material/Switch';


const User = ({name,number,username,setShowUser}) => {

    const [checked,setChecked] = useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    }
    const handleClick = () => {
        setShowUser(false);
    }

  return (
    <div className='user-container'  style={{backgroundColor:'#373A41',color:'white',minWidth:'300px', borderRadius:'15px'}}>
        <div className='flex p-6 pt-8 justify-between' style={{borderBottom:'1px solid grey'}}>
            <h1 className='text-[20px]'>User Info</h1>
            <CloseIcon className='cursor-pointer'  onClick = {() => handleClick()} />
        </div>

        <div className='flex items-center gap-8 p-4' style={{borderBottom:'1px solid grey'}}>
            <Avatar alt="Profile-Picture" src={img} sx={{height:76,width:76}} />
            {name}
        </div>

        <div className='flex justify-between p-4'  style={{borderBottom:'1px solid grey'}}>
                <div className='flex'>
                        <InfoOutlined/>
                        <div>
                        <p className='text-[14px]'>+{number}</p>
                        <p className='text-[10px]'>Mobile</p>
                        </div>

                </div>
                <div className='flex flex-col'>
                        <p className='text-[14px]'>{username}</p>
                        <p className='text-[10px]'>Username</p>
                </div>
        </div>


        <div className='flex flex-col items-center justify-center p-4 gap-2' style={{borderBottom:'1px solid grey'}}>
            <h1>Media Link and Docs</h1>
            <div className='flex gap-6 p-2' style={{backgroundColor:'#505357'}}>
                    <img src={img2} alt="" height={60} width={60}/>
                    <img src={img2} alt="" height={60} width={60}/>
                    <img src={img2} alt="" height={60} width={60}/>
            </div>
        </div>

        <div className='flex p-4 items-center justify-between' style={{borderBottom:'1px solid grey'}}>
             <div className='flex'>
                <NotificationsNoneOutlinedIcon/>
                <h1>Notification</h1>
             </div>
                <Switch checked={checked} onChange={handleChange} color='secondary' />
        </div>

        <div className='flex px-6 py-4 justify-between' style={{borderBottom:'1px solid grey'}}>
                  <p>Exit Group</p>
                  <p>Block</p>
                  <p>Report</p>
        </div>
    </div>
  )
}

export default User