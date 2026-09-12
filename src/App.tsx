import { ArrowRight } from "lucide-react";
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

        {/* Barra bajo el banner con acceso a la galería */}
        <div className="border-b border-crimson/30 bg-pink-light py-6">
          <div className="editorial-container flex justify-center">
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3 font-semibold uppercase tracking-wider text-white shadow-lg transition-colors duration-300 hover:bg-crimson-deep"
            >
              Ver galería
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

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
