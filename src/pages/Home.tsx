import AboutEvent from "@/components/about-event";

// import FAQSection from "@/components/faq-section";

import HeroSection from "@/components/hero-section";
import NotificationButton from "@/components/notification";
import ChatWidget from "@/components/ChatWidget/ChatWidget.tsx";
import Marquee from "@/components/ui/marquee";



export default function Home() {


  
  return (
    <>
      <HeroSection />
      <Marquee />
      <AboutEvent />


      {/* <FAQSection /> */}
      {/* <Footer /> */}  

      <NotificationButton />
      <ChatWidget />
     
    </>
  );


}
