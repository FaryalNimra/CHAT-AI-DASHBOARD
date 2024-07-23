import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import './index.css';
import Monitor from "./Pages/Monitor";
import Training from "./Pages/Training";
import Knbox from "./Pages/Knbox";
import Integration from "./Pages/Integration";
import Customer from "./Pages/Customer";
import Setting  from "./Pages/Setting";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
       <div className="main-content">
          <Base>
            <Routes>
            <Route index path="/" element={<Monitor />} />
            <Route index path="/Training" element={<Training />} />
            <Route index path="/Knbox" element={<Knbox />} />
            <Route index path="/Integration" element={<Integration />} />
            <Route index path="/Customer" element={<Customer />} />
            <Route index path="/Setting" element={<Setting />} />
            
            </Routes>
          </Base>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
