

import React from 'react'

function Button({id, containerClass,leftIcon,title }) {
  return (
    <button className={`group realtive z-10 w-fit cursor-pointer overflow-hidden rounded-full  bg-violet-50 px-7 py-3 text-black ${containerClass}  `} id={id}>
     {leftIcon}  
      <span className='relative overflow-hidden  font-general text-xs uppercase '>
        <div>
            {title}
        </div>
        {/* right icon */}
      </span>
    </button>
  )
}

export default Button
