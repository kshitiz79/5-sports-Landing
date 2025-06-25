// components/BMICalculator.tsx
'use client'
import { useState } from "react";

const BMICalculator = () => {
  const [gender, setGender] = useState("");

  return (
    <section className="bg-gray-100  relative">  
    <div className="relative w-full min-h-screen max-w-7xl mx-auto  bg-gray-100 flex justify-center items-center px-6 ">
      {/* Background Shape */}


      {/* Content */}
      <div className="relative  flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Section: Form */}
        <div className="bg-gray-100 max-w-lg">
          <p className="text-green-500 font-semibold uppercase tracking-wide border-b-2 border-green-500 inline-block">
            Let's Calculate
          </p>
          <h1 className="text-4xl text-black  md:text-5xl font-thin mt-2">
            CALCULATE YOUR <span className="text-green-500">BMI.</span>
          </h1>
          <p className="text-gray-500 mt-4">
            Bibendum arcu vitae elementum curabitur. Malesuada fames ac turpis egestas sed tempus urna et. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
          </p>

          {/* Gender Selection */}
          <div className="flex gap-4 mt-6">
            <button
              className={`w-1/2 py-3 text-lg font-thin border border-green-500 ${
                gender === "male" ? "bg-green-500 text-black" : "text-black"
              }`}
              onClick={() => setGender("male")}
            >
              MALE
            </button>
            <button
              className={`w-1/2 py-3 text-lg font-thin border border-green-500 ${
                gender === "female" ? "bg-green-500 text-black" : "text-black"
              }`}
              onClick={() => setGender("female")}
            >
              FEMALE
            </button>
          </div>

          {/* Input Fields */}
          <div className="mt-4 text-black">
            <input
              type="number"
              placeholder="Age"
              className="w-full p-3 bg-white border border-green-500 mt-2"
            />
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Weight / kg"
                className="w-1/2 p-3 bg-white border border-green-500"
              />
              <input
                type="number"
                placeholder="Height / cm"
                className="w-1/2 p-3 bg-white border border-green-500"
              />
            </div>
            <select className="w-full p-3 bg-white border border-green-500 mt-2">
              <option>Level of Activity</option>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 mt-4 bg-green-500 text-black font-semibold text-lg hover:bg-green-600 transition">
            SEND MESSAGE
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="hidden md:block relative z-10">
          <img
            src="./2.png"
            alt="Fitness Models"
            className="w-[600px] object-contain"
          />

        </div>

      </div>
      <div className="absolute hidden md:block right-0 border border-t-rounded-full w-1/2 h-1/2 bg-green-100 transform rotate-[-10deg]"></div>
    </div>
  </section>
  );
};

export default BMICalculator;
