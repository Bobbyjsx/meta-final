import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nft from "./pages/Nft";
import Place2stay from "./pages/PlaceTostay";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft">
            <Nft />
          </Route>
          <Route path="/PlaceTostay">
            <Place2stay />
           </Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
