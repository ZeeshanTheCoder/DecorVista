import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// PAGES 
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import DesignerPage from "./pages/DesignerPage";
import DesignerEdit from "./pages/DesignerEdit";
import DesignerProfile from "./pages/DesignerProfile";
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/designer-page" element={<DesignerPage />} />
          <Route path="/designer-edit" element={<DesignerEdit />} />
          <Route path="/designer-profile" element={<DesignerProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
