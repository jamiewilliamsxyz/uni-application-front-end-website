import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyle';
import Nav from './components/navigation/Nav';
import Footer from './components/navigation/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import SetupPage from './pages/SetupPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/product" element={<ProductPage />} /> 
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
