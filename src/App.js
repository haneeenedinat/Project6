
import './App.css';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import HomeServices from './Components/HomeServices/HomeServices';
import Testimonials from './Components/HomeServices/Testimonials/Testimonials';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    
     <Navbar/>
     <Background/>
     <HomeServices/>
     <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
