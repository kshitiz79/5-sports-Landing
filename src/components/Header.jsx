import React from 'react'
import { FaPhone } from 'react-icons/fa'

const Header = () => {
  return (
    <header className=" bg-white  top-0 sticky z-50 text-black px-12 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="/logo5.png" alt="Logo" className="h-14 w-auto" />
      </div>

      {/* Contact & CTA */}
      <div className="flex gap-4">
        <div className="flex items-center border-gray-400 border-2 px-6 py-4">
     <FaPhone className='rotate-90'/>
          <span>(+91) 93535 55855</span>
        </div>
        <a
          href="#"
          className=" border-gray-400 border-2 px-6 py-2 flex items-center justify-center hover:bg-black hover:text-black transition"
        >
          BOOK ONLINE HERE
        </a>
      </div>
    </header>
  )
}

export default Header
