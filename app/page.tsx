import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarqueeBar from "./components/MarqueeBar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";
import About from "./sections/About";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <Services />
        <Work />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
