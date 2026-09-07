import CursorProvider from "./components/Cursor";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import { HairGallery, EditorialGallery } from "./components/Galleries";
import Archive from "./components/Archive";
import About from "./components/About";
import Credits from "./components/Credits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CursorProvider>
      <div className="grain relative min-h-screen bg-pink">
        <Intro />
        <Nav />
        <main>
          <Hero />
          <SelectedWork />
          <HairGallery />
          <EditorialGallery />
          <Archive />
          <About />
          <Credits />
          <Contact />
        </main>
        <Footer />
      </div>
    </CursorProvider>
  );
}
