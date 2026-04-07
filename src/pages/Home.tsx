import AboutEvent from "@/components/about-event";

// import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NotificationButton from "@/components/notification";
import ChatWidget from "@/components/ChatWidget/ChatWidget.tsx";







export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutEvent />


      {/* <FAQSection /> */}
      <Footer />
  
      <NotificationButton />
      <ChatWidget />




    </>
  );


}
