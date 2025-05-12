import { Header } from "./pages/Header";
import { HeroSection } from "./pages/HeroSection";
import { MiddleSection } from "./pages/middleSection/MiddleSection";
import { ContactForm } from "./pages/ContactForm";
import { Footer } from "./pages/footer/Footer";
// import { CorouselSection } from "./pages/CorouselSection";


function App() {
  return (
    <div >
    <Header />
    <HeroSection />
    <MiddleSection/>
    {/* <CorouselSection/> */}
    <ContactForm/>
    <Footer/>
  </div>
  );
}

export default App;
