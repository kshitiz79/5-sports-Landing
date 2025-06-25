import React from 'react'

const Header = () => {
  return (
    <header className="bg-black top-0 sticky z-50 text-white px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="/logo5.png" alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Contact & CTA */}
      <div className="flex gap-4">
        <div className="flex items-center border border-white px-4 py-2">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h2l3 5-3 5H3V5zm13 5h5m-5 0l-2 2m2-2l-2-2"
            />
          </svg>
          <span>(+91) 93535 55855</span>
        </div>
        <a
          href="#"
          className="border border-white px-6 py-2 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          BOOK ONLINE HERE
        </a>
      </div>
    </header>
  )
}

export default Header
