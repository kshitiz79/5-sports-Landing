// components/BMICalculator.jsx
'use client'
import { useState } from "react";

const BMICalculator = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setBmi(null);
      setCategory("");
      return;
    }

    const heightInMeters = Number(height) / 100;
    const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory("Normal weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <section className="bg-gray-100 relative">
      <div className="relative w-full min-h-screen max-w-7xl mx-auto bg-gray-100 flex justify-center items-center px-6">
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Section: Form */}
          <div className="bg-gray-100 max-w-lg">
            <p className="text-green-500 font-semibold uppercase tracking-wide border-b-2 border-green-500 inline-block">
              Let's Calculate
            </p>
            <h1 className="text-4xl text-black md:text-5xl font-thin mt-2">
              CALCULATE YOUR <span className="text-green-500">BMI.</span>
            </h1>
            <p className="text-gray-500 mt-4">
              Enter your details below to check your Body Mass Index.
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 bg-white border border-green-500 mt-2"
              />
              <div className="flex gap-2 mt-2">
                <input
                  type="number"
                  placeholder="Weight / kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-1/2 p-3 bg-white border border-green-500"
                />
                <input
                  type="number"
                  placeholder="Height / cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
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

            {/* BMI Result */}
            <div className="mt-6">
              <button
                className="w-full py-3 bg-green-500 text-black font-semibold text-lg hover:bg-green-600 transition"
                onClick={calculateBMI}
              >
                CALCULATE BMI
              </button>

              {bmi !== null && (
                <div className="mt-4 p-4 border border-green-500 bg-white text-center">
                  <p className="text-lg font-semibold text-black">Your BMI: {bmi}</p>
                  <p className="text-gray-600">Category: {category}</p>
                </div>
              )}
            </div>
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
      </div>
    </section>
  );
};

export default BMICalculator;
