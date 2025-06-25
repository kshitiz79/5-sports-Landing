"use client"; // Required for client-side features in Next.js

import { FaUserTie, FaUsers, FaClock, FaDumbbell } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "CERTIFIED TRAINER",
    icon: <FaUserTie className="text-black-950 text-6xl opacity-80" />,
  },
  {
    value: 1500,
    suffix: "+",
    label: "HAPPY CLIENTS",
    icon: <FaUsers className="text-gray-950 text-6xl opacity-80" />,
  },
  {
    value: 10,
    suffix: "+",
    label: "YEARS EXPERIENCE",
    icon: <FaClock className="text-black text-6xl opacity-80" />,
  },
  {
    value: 12,
    suffix: "+",
    label: "TRAINING PROGRAMS",
    icon: <FaDumbbell className="text-gray-950 text-6xl opacity-80" />,
  },
];

// Component to animate individual numbers
const AnimatedNumber = ({ value, suffix }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0); // State for the counting value
  const inView = useInView(ref, { once: true }); // Trigger animation only once when in view

  useEffect(() => {
    if (inView) {
      // Animate number from 0 to the value when the component is in view
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < value) {
            return prevCount + Math.ceil(value / 100); // Increment the value to create a smooth animation
          } else {
            clearInterval(interval); // Stop once the target value is reached
            return value;
          }
        });
      }, 100); // Set the interval speed (in milliseconds)
      
      return () => clearInterval(interval); // Cleanup interval when component unmounts or stops being in view
    }
  }, [inView, value]);

  return (
    <motion.h3
      ref={ref}
      className="text-black text-5xl font-thin"
      initial={{ opacity: 0 }}
      animate={{
        opacity: inView ? 1 : 0, // Fade in when in view
        transition: { duration: 1 },
      }}
    >
      {Math.round(count)}
      {suffix}
    </motion.h3>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-gray-100 relative py-16 text-black text-center">
      <h2 className="text-5xl font-thin mb-14 text-black">WHY CHOOSE US?</h2>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12  px-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Background Icon */}
            <div className="mb-2 text-black">{stat.icon}</div>

            {/* Animated Number */}
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />

            {/* Label */}
            <p className="text-lg font-thin mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
