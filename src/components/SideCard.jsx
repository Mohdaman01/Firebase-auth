import React from 'react'

const SideCard = (props) => {

    const { background, sideProfile, name, tag } = props;
    return (
        <div className='mb-3 rounded-[10px]' >
            <div className='flex absolute z-10 mt-[3.5rem] text-white' >
                <img src={sideProfile} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>{tag}</p>
                </div>

            </div>
            <div className='relative' ><img src={background} alt="img" /></div>
        </div>
    )
}

export default SideCard