import React from 'react'

const Card = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl relative overflow-hidden shrink-0'>
      <img src={props.img} className='h-full object-cover' alt='professional pic'></img>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8'>
        <p className='bg-white text-2xl font-semibold rounded-full w-12 h-12 flex justify-center items-center'>{props.id+1}</p>
        <div className='text-white '>
            <p className='tracking-wide leading-normal py-6 text-shadow-2xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore, dolorum vero cumque omnis facere pariatur et incidunt ducimus reiciendis deleniti harum illo exercitationem tempora eligendi sapiente deserunt dolor fugit?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600  rounded-full px-3 py-2 text-white'>{props.tag}</button>
                <button className='bg-blue-600 w-13 rounded-full px-3 py-2 text-white'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
