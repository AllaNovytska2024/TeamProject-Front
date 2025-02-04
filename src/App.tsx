import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import HomePage from "./components/homepage/HomePage";
import TourList from "./components/tours/TourList";
import RegistrationPage from "./components/registrationForm/RegistrationPage";
import PasswordRecoveryPage from "./components/passwordRecoveryForm/PasswordRecoveryPage";
import Login from "./components/login/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tours" element={<TourList />} />
        <Route
          path="/login"
          element={
            <Login 
              onRegisterClick={() => window.location.href = "/registration"}
              onForgotPasswordClick={() => window.location.href = "/password-recovery"}
            />
          }
        />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
