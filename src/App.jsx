import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import ServicesAvocats from "./component/ServicesAvocats";
import ServicesClients from "./component/ServicesClients";
import ForgotPage from "./component/ForgotPage";
import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegistrerPage";
import About from "./component/About";
import Avocats from "./component/Avocats";
import DevenirMembre from "./component/DevenirMembre";
import Contact from "./component/Contact";
import DerniersArticles from "./component/DerniersArticles";
// import About from "./component/About";
// import LawyersPage from "./component/LayersPage";
// import Services from "./Services";
// import About from "./component/About";
// import News from "./News";
// import Contact from "./Contact";






// Tableau des articles

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/regitrer" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/avocats" element={<Avocats />} />
        <Route path="/devenir-membre" element={<DevenirMembre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/actualites" element={<DerniersArticles/>} />







        
        <Route path="/avocat" element={<ServicesAvocats />} />
        <Route path="/client" element={<ServicesClients />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
