import Header from "./components/Header";
import Hero from "./components/Hero";
import Galeria from "./components/Galeria";
import HairStyling from "./components/HairStyling";
import Trenzas from "./components/Trenzas";
import EditorialCreative from "./components/EditorialCreative";
import Team from "./components/Team";
import CaseStudy from "./components/CaseStudy";
import CaseStudyThree from "./components/CaseStudyThree";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-light">
      <Header />
      <main>
        <Hero />
        <Galeria />
        <HairStyling />
        <Trenzas />
        <EditorialCreative />
        <Team />
        <CaseStudy />
        <CaseStudyThree />
      </main>
      <FinalCTA />
    </div>
  );
}
