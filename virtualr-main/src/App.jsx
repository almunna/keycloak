import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { useKeycloak } from "@react-keycloak/web";
import SecureRoute from "./SecureRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const { keycloak } = useKeycloak();

  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div>
          {!keycloak.authenticated && (
            <button onClick={() => keycloak.login()}>Login</button>
          )}
          {keycloak.authenticated && (
            <button onClick={() => keycloak.logout()}>Logout</button>
          )}
        </div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<SecureRoute component={FeatureSection} />} />
          <Route path="/workflow" element={<SecureRoute component={Workflow} />} />
          <Route path="/pricing" element={<SecureRoute component={Pricing} />} />
          <Route path="/testimonials" element={<SecureRoute component={Testimonials} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
