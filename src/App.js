import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import RegisterPage from "./Page/RegisterPage";
import LoginPage from "./Page/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/RegisterPage' element={<RegisterPage/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
