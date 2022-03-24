import logo from './logo.svg';
import './App.css';
import Navbar from './components/HomePage/Navbar/Navbar';
import Banner from './components/HomePage/Banner/Banner';
import Service from './components/HomePage/Service/Service';
import Slider from './components/HomePage/Slider/Slider';
import Footer from './components/HomePage/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <Service/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
