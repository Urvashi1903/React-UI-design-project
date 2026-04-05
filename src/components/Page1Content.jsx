import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className=' h-[90vh] flex items-center gap-10 py-10'>
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
