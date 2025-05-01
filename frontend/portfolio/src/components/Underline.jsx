import React from 'react'
import dottedline from '../assets/dottedline.png'

function Underline() {
    return (
        <div className='mt-[80px] mb-[80px] max-md:mt-[50px] max-md:mb-[50px]'>
            <img className='h-auto w-full object-cover' src={dottedline} alt="" />
        </div>
    )
}

export default Underline