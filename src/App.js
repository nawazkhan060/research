import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import WhyPublish from './components/WhyPublish';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={
            <>
              <Hero />
              <WhyChooseUs />
              <WhyPublish />
              <ContactUs />
              <Footer />
            </>
          } />
          
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;