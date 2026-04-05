import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  return (
    <div className='w-2/3 h-full p-6 mr-10 flex gap-5 flex-nowrap '>
        {props.users.map(function(elem,idx){
          return <Card id={idx} img={elem.img} content={elem.content} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
