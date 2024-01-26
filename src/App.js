
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactUsPage from './Pages/ContactUsPage';
import FeaturePage from './Pages/FeaturePage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div>
            <Router>
        <Navbar/>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/contact' element={<ContactUsPage/>}/>
                <Route path='/feature' element={<FeaturePage/>}/>
                <Route path='/product' element={<ProductPage/>}/>
                <Route path='*' element={<HomePage/>}/>
              </Routes>
            </Router>
        <Footer/>
    </div>
  );
}

export default App;
