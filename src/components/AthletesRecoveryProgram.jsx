import Image from "next/image";

export default function AthletesRecoveryProgram() {
  return (
    <section className="bg-gray-100  rounded-t-3xl text-center px-5 py-12 relative ">
      {/* Side cutouts */}

      {/* Header */}
      <section className="flex  px-14 w-full text-black  max-md:flex-col ">
      {/* Main Article with notches */}
      <article className="relative flex flex-col md:py-10 py-5 w-full     overflow-visible ">
        {/* Left notch */}
       
        {/* Right notch */}
       

        <h2 className="self-center text-2xl  md:text-6xl font-thin leading-none ">
      Athletes Recovery Program
        </h2>

        <div className="hidden md:block flex-wrap gap-3 justify-center mt-6 w-full text-2xl text-center ">
  <p className="max-w-7xl mx-auto">
    Learn more about our mission to redefine sports medicine and athlete care.
  </p>
</div>

      </article>
    </section>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto text-left mt-10">
        {/* Block 1 */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold text-black">
           <span className="text-lime-500">01.</span>  A Personal Recovery Specialist Who Designs Your Journey Every Week
          </h3>
          <p className="text-gray-900 ">
            When you have a dedicated team that understands your unique needs,
            every step of your recovery becomes purposeful. We’re here to guide
            you, offering a plan tailored specifically to your goals, pushing
            you to reach new milestones without compromising your health.
          </p>
        </div>
        <div>

            <Image
              src="/pp5.png" // replace with actual image path
              alt="Recovery Specialist"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />

        </div>

        {/* Block 2 */}
        <div>

            <Image
              src="/pp4.png" // replace with actual image path
              alt="Recovery Insights"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold text-black">
          <span className="text-lime-500">02.</span> Recovery Driven by Insights and Real Data
          </h3>
          <p className="text-gray-900">
            We don’t guess; we measure. With the latest recovery technology,
            we’re able to assess your individual needs, tailor treatments, and
            help you recover faster and safer.
          </p>
        </div>

        
      {/*  block 3*/}


          <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold text-black">
          <span className="text-lime-500">03.</span> Strength That Translates Directly to the Field.
          </h3>
          <p className="text-gray-900">
           Our Goal isn't to help you heal - it's to make you stronger than before.
           Every recovery session is designed with performance in mind, so when you step back into your sport, you'll feel the difference where it counts-on the field.
          </p>
        </div>
        <div>

            <Image
              src="/pp2.png" 
              alt="Recovery Specialist"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
      
        </div>

          <div>
          <div className="rounded-xl overflow-hidden border border-lime-400 p-1">
            <Image
              src="/pp1.png" 
              alt="Recovery Insights"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold text-black">
          <span className="text-lime-500">04.</span>React Faster and Move with More Power When It
          </h3>
          <p className="text-gray-900">
            In those high-pressure momenets, milliseconds count. that's why our recovery program includes methods to enhance your reaction time and build expolsive power,helping you stay sharp and make the game-changing move when it matters.
          </p>
        </div>

         <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold text-black">
          <span className="text-lime-500">05.</span> Speed That Shifts the Momentum of the Game
          </h3>
          <p className="text-gray-900">
            when it comes to sports, speed can be the ultimate game-changer.Through our specialized recovery and conditioning program,we focus on improving your agility and overall speed-giving you that advantage in every sprint and play.
          </p>
        </div>
        <div>

            <Image
              src="/pp6.png" // replace with actual image path
              alt="Recovery Specialist"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
     
        </div>
      </div>

      {/*  block 3*/}


      
    </section>
  );
}
