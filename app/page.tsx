import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Map from "./components/Map";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <About />
        <Map />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
