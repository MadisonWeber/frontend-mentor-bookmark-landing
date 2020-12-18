
import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Extension from './components/Extension';
import FrequentlyAsked from './components/FrequentlyAsked';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Extension />
      <FrequentlyAsked/>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
