import React from 'react';
import { Avatar } from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import img from "../profile.webp";
import img2 from "../Img2.png";


const RecievedMessage = ({time})=>{
    return(
        <div className='flex gap-2'>
        <div>
         <Avatar alt="Profile-Picture" src={img} />
        </div>
            <div className='p-2 py-3 rounded-[10px] flex flex-col' style={{backgroundColor:' #717378'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque asperiores! Amet dolorem architecto aliquid ea? Aspernatur sapiente asperiores earum.
                <span className='text-[9px] bg-black p-1 rounded-[8px] mr-auto text-left'>{time}</span>
            </div>
        </div>
    )
}
const SendMessage = ({time})=>{
    return(
        <div className='flex gap-2'>
            <div className='p-2 py-3 rounded-[10px] flex flex-col' style={{backgroundColor:'#505057'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque asperiores! Amet dolorem architecto aliquid ea? Aspernatur sapiente asperiores earum.
                <span className='text-[9px] bg-black p-1 rounded-[8px] ml-auto text-right'>{time}</span>
            </div>
            <div>
         <Avatar alt="Profile-Picture" src={img} />
        </div>
        </div>
    )
}

const ImageMessage = ({img,userIcon}) => {
        return (
            <div className='flex gap-2'>
                <div className='flex items-center justify-center ml-auto' style={{width:'150px'}} >
                        <img src={img} alt="" />
                </div>
                <Avatar alt="Profile-Picture" src={userIcon} />
            </div>
        )
}

const Chat = ({name,username,number,status,setCurrReciever,setShowUser}) => {

    const handleClick = () => {
        const elem = document.querySelector(".icons-toggle");
       if(elem.classList.contains('hide')) elem.classList.toggle('show');
       else elem.classList.toggle('hide');
    }

    const dummyReciever = {
        name : name,
        username : username,
        number:number
    }

    
    const displayReciever = () => {
        setShowUser(true); 
        setCurrReciever(dummyReciever)
    }


  return (
    <div className='flex flex-col justify-between relative' style={{color:'white'}}>
        <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 p-4' style={{backgroundColor:'#505057',color:'white'}}>
         <div className='flex flex-1 items-center gap-4' onClick = {() => {displayReciever()}}>
         <Avatar className='cursor-pointer'  alt="Profile-Picture" src={img}/>
            <div className='flex flex-col items-start cursor-pointer'>
                <h1>{name}</h1>
                <p className='text-[12px]' style={{color:'rgba(255, 255, 255, 0.45)'}} >{status}</p>
            </div>
         </div>

            <div className='flex gap-4'>
               <div className='p-1 rounded-[0.9rem]' style={{backgroundColor:'rgba(217, 217, 217, 0.29)'}}>
               <CallOutlinedIcon/>
               </div> 
               <div className='p-1 rounded-[0.9rem]' style={{backgroundColor:'rgba(217, 217, 217, 0.29)'}}>
                <VideoCallIcon/>
                </div>
            </div>
        </div>


        <div className='flex flex-col mt-4 gap-4'>
            <RecievedMessage time = '13:10'/>
            <SendMessage time = '16:10'/>
            <ImageMessage img = {img2} userIcon={img}/>

        </div>
        </div>

        <div className='flex gap-2'>
            <div className='flex flex-col gap-2 p-2 rounded-[5px] absolute bottom-0 ' style={{backgroundColor:"#373A41"}}>
            <div className="hide icons-toggle z-[-0]">
            <div className='p-1 rounded-[5px]' style={{backgroundColor:"rgba(217, 217, 217, 0.29)"}} >
                <InsertDriveFileOutlinedIcon/>
            </div>
            <div className='p-1 rounded-[5px]' style={{backgroundColor:"rgba(217, 217, 217, 0.29)"}} >
            <AttachFileIcon/>
            </div>
            <div className='p-1 rounded-[5px]' style={{backgroundColor:"rgba(217, 217, 217, 0.29)"}} >
            <MicIcon/>
            </div>
            </div>
            <div className='p-1 rounded-[5px] flex items-center justify-center'  onClick={() => handleClick()}   style={{backgroundColor:"rgba(217, 217, 217, 0.29)"}} >
            <MoreVertIcon/>
            </div>
    
            </div>
            <div className='flex-1 flex items-center rounded-[10px] ml-14' style={{border:'1px solid grey'}}>
                    <div className='flex flex-1 h-full' style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
                    <input placeholder='Type Message Here' className='outline-none  p-2 w-full'  type="text" style={{backgroundColor:'#505057',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}/>
                    <div className='flex items-center p-2' style={{backgroundColor:'rgba(217, 217, 217, 0.29)'}}>
                            <MicIcon/>
                    </div>
                    </div>

                    <div className='flex items-center justify-center p-2 pl-4 h-full' style={{backgroundColor:'#E1348B',borderTopRightRadius:"10px",borderBottomRightRadius:'10px'}}>
                            <SendIcon style={{transform:'rotate(-20deg)'}}/>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Chat