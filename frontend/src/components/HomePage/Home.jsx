import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { FindYourFuture } from "./main/FindYourFuture";
import { HowItWorks } from "./main/HowItWorks";
import { Directions } from "./main/Direct/Directions";
import { useRef } from "react";

export const Home = () => {
  const HowItWorksRef = useRef(null);
  const scrollToHowItWorks = () => {
    if (HowItWorksRef.current) {
      HowItWorksRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header onScrollToHowItWorks={scrollToHowItWorks} />
      <FindYourFuture />
      <Directions />
      <div ref={HowItWorksRef}>
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
};
