import React from 'react'
import Card from './Card'
import dp1 from "../assets/pexels-ali-pazani-2613260.png"
import dp2 from '../assets/pexels-imad-clicks-9810659.png'
import picture1 from "../assets/pexels-humphrey-muleba-2045248.png"
import picture2 from  '../assets/pexels-tobias-bjørkli-2236382.png'
import SideCard from './SideCard'
import sideProfile1 from '../assets/pexels-anastasia-shuraeva-4406721.png';
import sideProfile2 from '../assets/pexels-andrea-piacquadio-3771118.png'
import sideProfile3 from '../assets/pexels-antoni-shkraba-4442005.png';
import sideProfile4 from '../assets/pexels-antoni-shkraba-4442005.png'
import background1 from '../assets/pexels-ekaterina-12203460.png';
import background2 from '../assets/pexels-genaro-servín-763210.png';
import background3 from '../assets/pexels-pixabay-164455.png';
import background4 from '../assets/pexels-steve-johnson-1269968.png';
import { UserAuth } from '../context/AuthContext'
import home from '../assets/home.svg';
import notificaion from '../assets/notification.svg';
import shop from '../assets/heart-1.svg';
import conversation from  '../assets/message-1.svg';
import waller from '../assets/message-1.svg'
import subscription from '../assets/favorite.svg';
import profile from '../assets/profile.svg';
import setting from '../assets/setting.svg'
import logoutsvg from '../assets/logout.svg';

const Main = () => {

const { logout } = UserAuth();

const handleLogOut = async () =>{
    await logout();
}    


  return (
    <div className='flex top-[8rem] left-[1.2rem] w-[95%] pt-[8rem] p-2 m-1 gap-5 mx-auto'>
        <div className='w-[20%] border-black border-2 h-[550px] fixed rounded-[10px] bg-[#FFFFFF]' >
            <ul className='m-3 ml-8 flex flex-col gap-4' >
                <li className='flex' ><img src={home} alt="" /> Home</li>
                <li className='flex'><img src={notificaion} alt="" /> Notifications</li>
                <li className='flex'><img src={shop} alt="" /> Shop</li>
                <li className='flex'><img src={conversation} alt="" /> Conversation</li>
                <li className='flex'><img src={waller} alt="" /> Wallet</li>
                <li className='flex'><img src={subscription} alt="" /> Subscription</li>
                <li className='flex'><img src={profile} alt="" /> My Profile</li>
                <li className='flex'><img src={setting} alt="" /> Settings</li>
            </ul>
            <div className='m-3 ml-8 mt-[40%] cursor-pointer ' onClick={handleLogOut}><img sr={logoutsvg} alt="" />
                Log Out
            </div>
        </div>
        <div className=' w-[44.3%] absolute left-[25%]  '  >
            <Card dp={dp1} name={"Lara Leones"} tag={"@thewallart"} para={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} picture={picture1} likes={"9.8k"} comments={"8.6k"} shares={"7.2k"} />

            <Card dp={dp2} name={"Thomas J."} tag={"@thecustomcreater"} para={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More"} picture={picture2} likes={"9.8k"} comments={"8.6k"} shares={"7.2k"} />
        </div>
        <div className=' w-[25%] border-black border-2 overflow-auto fixed right-[4rem] h-[550px] rounded-[10px] bg-[#FFFFFF] ' >
            <div className='w-[25%] bg-white h-[3rem] rounded-tl-[10px]  pt-[.5rem] pl-[4rem] fixed z-30 border-b-4'>
                <span>Artists</span>
                <span className='ml-[3rem]' >Photographers</span>
            </div>
            <div className='px-[4rem] pt-[4rem]' >
                <SideCard background={background1} name={"Thomos Edward"} tag={"@thewildwithyou"} sideProfile={sideProfile1} />

                <SideCard background={background2} name={"Chris Doe"} tag={"@thewildwithyou"} sideProfile={sideProfile2} />

                <SideCard background={background3} name={"Emilie Jones"} tag={"@thewildwithyou"} sideProfile={sideProfile3} />
                <SideCard background={background4} name={"Emilie Jones"} tag={"@thewildwithyou"} sideProfile={sideProfile4} />
            </div>
        </div>
    </div>
  )
}

export default Main