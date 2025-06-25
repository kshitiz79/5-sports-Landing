"use client";

import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const feedbackData = [
  {
    company: "5 Sports Health",
    details: [
      {
        category: "Physiotherapy Experience",
        points: [
          {
            question: "My physio is very good. Arjun is doing nicely, very smooth. I am completely satisfied.",
            rating: 5,
          },
          {
            question: "The strengthening exercises and guidance helped my back pain recover fast.",
            rating: 5,
          },
          {
            question: "I received excellent support throughout my physio sessions from the team.",
            rating: 5,
          },
        ],
      },
      {
        category: "Clinic Atmosphere & Team",
        points: [
          {
            question: "The staff are courteous and helpful throughout the entire treatment process.",
            rating: 5,
          },
          {
            question: "Clean, modern, and athlete-focused facility equipped with latest technology.",
            rating: 5,
          },
        ],
      },
      {
        category: "Trust & Recommendation",
        points: [
          {
            question: "Highly recommend Dr. Natraj and his physio team for orthopedic and sports care.",
            rating: 5,
          },
        ],
      },
    ],
    overallRating: 10,
    clientFeedback:
      "From accurate diagnosis to specialized treatment, the team at 5 Sports Health is outstanding. Dr. Natraj and Dr. Radhesh Menon ensure every patient receives the right advice, not unnecessary tests. Their conservative approach and professionalism is deeply appreciated.",
    clientDetails: {
      name: "Deepika Singh",
      role: "Local Guide",
      date: "April 2025",
    },
  },
  {
    company: "Cyclists Team – Bangalore",
    details: [
      {
        category: "Sports-Specific Testing",
        points: [
          {
            question: "They covered everything from VO2 max, gait, posture to movement analysis.",
            rating: 5,
          },
          {
            question: "The accuracy and relevance of testing was better than any academy we’ve seen.",
            rating: 5,
          },
          {
            question: "Excellent insights and solutions tailored for athlete performance and recovery.",
            rating: 5,
          },
        ],
      },
    ],
    overallRating: 10,
    clientFeedback:
      "We brought our team of 34 athletes for testing — the attention to detail and comprehensive services blew our minds. It’s rare to see a facility that understands sports medicine this deeply. Highly recommended!",
    clientDetails: {
      name: "Ankit Sharm",
      role: "Cycling Team Lead",
      date: "March 2025",
    },
  },
];

const FeedbackCard = ({ category, points }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
    <h3 className="text-base sm:text-lg font-thin text-gray-800 mb-4">
      {category}
    </h3>
    <ul className="space-y-2 sm:space-y-3">
      {points.map((point, index) => (
        <li
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
        >
          <p className="text-gray-700 text-sm sm:text-base font-sans font-thin">
            {point.question}
          </p>
          <div className="flex items-center mt-2 sm:mt-0">
            {Array(point.rating)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500 ml-1" />
              ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ClientFeedback = ({ data }) => (
  <div className="py-6 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-thin font-sans text-gray-800 mb-4 sm:mb-6">
        {data.company}
      </h2>
      <div className="flex flex-col sm:flex-row font-sans space-y-4 sm:space-y-0 sm:space-x-6">
        {data.details.map((item, index) => (
          <FeedbackCard
            key={index}
            category={item.category}
            points={item.points}
          />
        ))}
      </div>

      <div className="bg-gray-50 border-l-4 border-green-500 p-4 sm:p-6 mt-6">
        <FaCheckCircle className="text-green-500 text-xl sm:text-2xl mb-2" />
        <p className="text-gray-700 italic text-sm sm:text-base">
          {data.clientFeedback}
        </p>
        {data.clientDetails && (
          <div className="mt-4 text-xs font-sans sm:text-sm text-gray-600">
            <p>
              <strong>{data.clientDetails.name}</strong>
            </p>
            <p>{data.clientDetails.role}</p>
            <p>{data.clientDetails.date}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-100 relative  md:py-20 sm:py-12">
      <div className="max-w-8xl mx-auto ">
        <h1 className="text-center text-2xl sm:text-3xl font-sans font-thin text-gray-800 lg:mb-3 sm:mb-10">
          Client Testimonials
        </h1>
        {feedbackData.map((clientFeedback, index) => (
          <ClientFeedback key={index} data={clientFeedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
