import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HairStyling from "./components/HairStyling";
import Trenzas from "./components/Trenzas";
import EditorialCreative from "./components/EditorialCreative";
import Manifesto from "./components/Manifesto";
import Team from "./components/Team";
import CaseStudy from "./components/CaseStudy";
import CaseStudyThree from "./components/CaseStudyThree";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-light">
      <Header />
      <main>
        <Hero />
        <About />
        <HairStyling />
        <Trenzas />
        <EditorialCreative />
        <Manifesto />
        <Team />
        <CaseStudy />
        <CaseStudyThree />
        <Testimonials />
      </main>
      <FinalCTA />
    </div>
  );
}
