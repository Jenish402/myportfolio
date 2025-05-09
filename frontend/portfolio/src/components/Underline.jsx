import React from 'react'
import dottedline from '../assets/dottedline.webp'

function Underline() {
    return (
        <div className='mt-[80px] mb-[80px] w-full overflow-hidden max-md:mt-[50px] max-md:mb-[50px]'>
            <img className='min-w-full object-cover' src={dottedline} alt="" />
        </div>
    )
}

export default Underline