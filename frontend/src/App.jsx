// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar and Footer are outside Routes to appear on every page */}
      <Navbar />
      <main className="pt-20"> {/* Add padding to offset the fixed Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          {/* Add other routes here (e.g., /favorites, /bookings) */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;