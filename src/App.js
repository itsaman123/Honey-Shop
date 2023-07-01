 import './App.css';
import HeroSection from './Components/Hero';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';
import HeroCard from './Components/HeroCard';
import Testimonials from './Components/Testimonials';
import ContactForm from './Components/ContactForm';
function App() { 
  return (
    <>
    <Navbar />
    <HeroSection />
    <HeroCard/>
    <Testimonials />
    <ProductCard/>
    <ContactForm/>

    <Footer />

    </>
  );
}
export default App;