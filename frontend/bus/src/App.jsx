import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './components/Header';
import Operators from './pages/Operators';
import Blogs from './pages/Blogs';
import Products from './pages/Products';
import Gallery from './pages/Gallery';

import './App.css';


function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/operators" element={<Operators />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/booking" component={Booking} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="book-tickets" component={BookTickets} /> */}
    </Routes>
    </Router>
  );
}

export default App;