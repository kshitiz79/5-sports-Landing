import AthletesRecoveryProgram from "@/components/AthletesRecoveryProgram";
import BMICalculator from "@/components/BMICalculate";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testemonials";
import WhyChooseUs from "@/components/WhyToChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <AthletesRecoveryProgram/>
      <WhyChooseUs/>
      <BMICalculator/>
      <StatsSection/>

      <Testimonials/>
            <ContactSection/>
            <Footer/>


    </>
  );
}
