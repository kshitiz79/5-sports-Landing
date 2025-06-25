import React from 'react'

const Header = () => {
  return (

<header class="bg-black top-0 sticky z-50 text-white px-12 py-4 flex justify-between items-center ">

  <div class="flex items-center gap-4">
    <img src="/logo5.png" alt="Logo" className="h-12 w-auto" />
   
  </div>

  
  <div class="flex gap-4">
    <div class="flex items-center border border-white px-4 py-2">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 5h2l3 5-3 5H3V5zm13 5h5m-5 0l-2 2m2-2l-2-2" />
      </svg>
      <span>(+91)  9353555855</span>
    </div>
    <a href="#"
      class="border border-white px-6 py-2 flex items-center justify-center hover:bg-white hover:text-black transition">
      BOOK ONLINE HERE
    </a>
  </div>
</header>

  )
}

export default Header