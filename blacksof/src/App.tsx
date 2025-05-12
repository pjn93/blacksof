import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MiddleSection } from "./components/MiddleSection";
import { ContactForm } from "./components/ContactForm";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    <Header />
    <HeroSection />
    <MiddleSection/>
    <ContactForm/>
    {/* <Footer/> */}
  </div>
  );
}

export default App;
