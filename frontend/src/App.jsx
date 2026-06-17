import React from 'react';
import './App.css';
import './index.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';
import Placeorder from './pages/Placeorder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const location = useLocation();
  const hideNavbar = location.pathname === '/login'

  return (
    <div className="App">
      <ToastContainer />
      {!hideNavbar && <Navbar />}
      <Searchbar />
     <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/placeorder' element={<Placeorder/>}/>
      <Route path='/orders' element={<Orders/>}/>
     </Routes>
     {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;
