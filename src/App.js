import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tabs from './components/Tabs';
import CheckoutPage from './pages/CheckoutPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/checkout" element = {<CheckoutPage />} />
        <Route path = "/contact" element = {<ContactUsPage />} />
        <Route path = "/gallery" element = {<GalleryPage />} />
        <Route path = "/about" element = {<AboutUsPage />} />
        <Route path = "/tabs" element = {<Tabs />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
