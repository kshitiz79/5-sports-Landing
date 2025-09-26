import React from 'react'

const Hero = () => {
  return (
    <section className="relative sticky top-0 h-screen w-full overflow-hidden text-white animate-fadeIn">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-100 animate-zoomBg"
        style={{
          backgroundImage: "url('/banner1.jpg')", // replace with actual path
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <p className="text-sm md:text-base tracking-widest mb-3">
          INDIA’S LEADING SPORTS INJURY & REHAB CENTER
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
          Healing Champions. Empowering Recovery.
        </h1>

        {/* Rating */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="./banner2.jpg"
            alt="Patient Review"
            className="w-6 h-6 mr-2 rounded-full"
          />
          <span className="text-yellow-400 text-xl mr-2">★★★★★</span>
          <span className="text-sm">5.0 rating from 500+ athletes & patients</span>
        </div>

        {/* CTA Button */}
        <a
          href="https://kivihealth.com/clinic/fives-sport-hospital-"
          className="border border-white px-6 py-3 hover:bg-white hover:text-black transition"
        >
          BOOK YOUR CONSULTATION
        </a>
      </div>
    </section>
  )
}

export default Hero
