import "./App.css";
import {Navbar} from "./components/Navbar";
import HeroSection from "./section/HeroSection";
import About from "./section/About";
import "./index.css"; 
import Gallery from "./section/Gallery";
import {Footer} from "./components/Footer";
import Faq from "./components/Faq";
import Tabb from "./components/Tabb";






function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
     <About/>
     <Gallery/>
     <Faq/>
     <Tabb/>
     <Footer/>
    
    
 

   
    </>
  );
}

export default App;
