import Image from 'next/image'
import React from 'react'
const Navbar = () => {
  return (
    <div className='w-full flex justify-content-between align-items-center bg-blue-500 px-3'>
     <Image src={'/logo-dux-blanco.png'} alt="dux icon" width={25} height={25}/>
      <p className='pi pi-cog text-white	'/>
    </div>
  )
}

export default Navbar