import React from 'react'
import heart from '../assets/heart-1.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.svg'

const Card = (props) => {
    const { dp, picture, name, tag, para,likes, shares, comments} = props;
  return (
    <div className='p-2 m-2 mb-8 border-black border-2 rounded-[10px] bg-[#FFFFFF]'>
        <div className='flex'>
            <img src={dp} alt="dp" />
            <div>
              <h3>{name} </h3> 
              <p>{tag}</p> 
            </div>
        </div>
        <div>
            <p>{para} <span>Read More</span></p>
        </div>
        <div>
            <img src={picture} alt="" />
        </div>
        <div className='flex gap-5 pl-5 mt-5'>
            <span className='flex' ><img src={heart} alt="" /> {likes}</span>
            <span className='flex'><img src={comment} alt="" /> {comments} </span>
            <span className='flex'><img src={share} alt="" /> {shares}</span>
        </div>
    </div>
  )
}

export default Card