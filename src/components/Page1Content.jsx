import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='bg-gray-800 h-[90vh] flex items-center gap-10 py-10'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
