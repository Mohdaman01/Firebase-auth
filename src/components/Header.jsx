import React from 'react'

const Header = () => {
    return (
        <div  className='fixed w-[90%] z-30 left-[5%] pr-2' >
            <header className='flex justify-between mt-3 mv-3 px-3'>
                <div className="logo sm:w-[170px] md:w-[260px]  h-[80px] pt-5 pl-14 border-black border-2 rounded-[10px] bg-[#FFFFFF] ">LOGO</div>
                <div className="search border-2 border-black w-[40%] h-[80px] rounded-[10px] px-2 bg-[#FFFFFF] ">
                    <input type="text" className='w-[100%] bg-[lightgrey] rounded-[10px] mt-5 pl-3 ' placeholder='Search here...' />
                </div>
                <div className=' w-[20%] cursor-pointer border-black border-2 mr-2 rounded-[10px] bg-[#FFFFFF] bg-[#88C2BB] text-center pt-[1.2rem]' >
                    Become a Seller
                </div>
            </header>
        </div>
    )
}

export default Header