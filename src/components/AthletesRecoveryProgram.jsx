'use client';

import React from 'react';
import Image from 'next/image';

const recoverySteps = [
  {
    step: '01',
    title: 'A Personal Recovery Specialist Who Designs Your Journey Every Week',
    image: '/pp5.png',
    paragraph:
      'Every athlete heals differently, and that’s why our program assigns you a dedicated recovery specialist who truly understands your sport, your body, and your goals. From the first session to the final phase of reintegration, your specialist continuously monitors your progress and adapts your plan weekly. Whether you’re dealing with an injury, overtraining, or performance fatigue, the approach is always personal. We believe real progress comes from precision care—not templates. ',
  },
  {
    step: '02',
    title: 'Recovery Driven by Insights and Real Data',
    image: '/pp4.png',
    paragraph:
      'In sports, recovery without data is just guesswork—and guesswork leads to setbacks. At 5 Sports Health, we leverage advanced performance diagnostics and recovery metrics to monitor every phase of your rehabilitation. From joint range scans to muscle function tests and VO2 max assessments, our technology reads what your body can’t always express. These insights help us understand how your muscles respond to treatment, how your nervous system is adapting, and what adjustments need to be made.',
  },
  {
    step: '03',
    title: 'Strength That Translates Directly to the Field',
    image: '/pp2.png',
    paragraph:
      'Injury recovery isn’t just about healing—it’s about building strength that matters where it counts. That’s why our sessions focus not only on rehab, but also on performance integration. We train your body to move better, hit harder, and last longer—so when you’re cleared, you’re not just ‘ready’; you’re upgraded. From resistance training and neuromuscular re-education to plyometrics and sport-specific drills, everything is structured to translate into real-game performance.',
  },
  {
    step: '04',
    title: 'React Faster and Move with More Power When It Counts',
    image: '/pp1.png',
    paragraph:
      'At the highest level of sport, milliseconds make all the difference. That’s why we train your reflexes, reactions, and raw power with proven neuromuscular techniques. Our program includes explosive movement drills, contrast training, resistance band work, and reaction-based reflex tasks—all targeted to make you faster, sharper, and more dominant in those game-changing moments.',
  },
  {
    step: '05',
    title: 'Speed That Shifts the Momentum of the Game',
    image: '/pp6.png',
    paragraph:
      'Speed is more than how fast you run—it’s how fast you recover, respond, and dominate the game’s turning point. At 5 Sports Health, our recovery program integrates elite-level speed and agility conditioning into every rehabilitation plan. We go beyond cardio—we build mechanical speed from the ground up. Our specialists target stride mechanics, foot placement, ankle stiffness, and glute activation to give you explosive acceleration.',
  },
];

export default function AthletesRecoveryProgram() {
  return (
    <section className="bg-gray-100 rounded-t-3xl text-center px-5 py-12 relative">
      {/* Header */}
      <section className="flex px-14 w-full text-black max-md:flex-col">
        <article className="relative flex flex-col md:py-10 py-5 w-full overflow-visible">
          <h2 className="self-center text-2xl md:text-6xl font-thin leading-none">
            Athletes Recovery Program
          </h2>
          <div className="hidden md:block flex-wrap gap-3 justify-center mt-6 w-full text-2xl text-center">
            <p className="max-w-7xl mx-auto">
              Learn more about our mission to redefine sports medicine and athlete care.
            </p>
          </div>
        </article>
      </section>

      {/* Alternating Layout Blocks */}
      <div className="flex flex-col gap-20 max-w-7xl mx-auto text-left mt-10">
        {recoverySteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } gap-10 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-2/5">
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={100}
                className=" object-cover w-full h-[30rem]"
              />
            </div>

            {/* Text Block */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h3 className="text-5xl font-thin text-black">
                <span className="text-green-500">{step.step}.</span> {step.title}
              </h3>
              <p className="text-gray-900 text-xl">{step.paragraph}</p>
              <button className="mt-4 w-fit px-6 py-2 bg-black text-white rounded hover:bg-lime-600 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
