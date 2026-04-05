import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero from './Hero'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='w-1/3 h-full bg-white flex justify-between flex-col px-10'>
            <Hero/>
            <Arrow/>
        </div>
    )
}

export default LeftContent
