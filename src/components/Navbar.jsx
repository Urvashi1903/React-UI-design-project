import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between px-40 py-10'>
      <div>
        <button className='bg-black text-white px-7 py-2 rounded-full uppercase'>Target Audience</button>
      </div>
      <div>
        <button className='bg-gray-300 text-black px-6 py-1 rounded-full uppercase tracking-widest text-sm'>Digital Banking Platform</button>
      </div>
    </div>
  )
}

export default Navbar
